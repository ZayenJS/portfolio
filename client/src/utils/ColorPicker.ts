import { Color } from './Color';

export class ColorPicker {
  private _color: string = '';
  private _mouseElement: HTMLDivElement = document.createElement('div');

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private x: number,
    private y: number,
    private convert2hex: boolean = false,
  ) {
    this.removeCursors();
    this.createPicker();
  }

  private removeCursors = () => {
    const elem = Array.from(document.getElementsByTagName('*'));
    for (const el of elem) {
      (el as HTMLElement).style.cursor = 'none';
    }
  };

  private createPicker = () => {
    this._mouseElement.className = 'color-picker';
    this._mouseElement.style.left = `${this.x}px`;
    this._mouseElement.style.top = `${this.y}px`;
    this._mouseElement.style.backgroundColor = this._color;
    this._mouseElement.dataset.color = this._color;
    document.body.append(this._mouseElement);
  };

  public move = (event: MouseEvent) => {
    const ctx = this.canvas.getContext('2d');
    this.x = event.pageX;
    this.y = event.pageY;
    this._mouseElement.style.left = `${this.x}px`;
    this._mouseElement.style.top = `${this.y}px`;
    if (ctx) {
      const pixel = ctx.getImageData(this.x, this.y, 1, 1);
      const data = pixel.data;

      const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
      this._color = this.convert2hex ? Color.rgba2Hex(rgba) : rgba;

      this._mouseElement.style.backgroundColor = this._color;
      this._mouseElement.dataset.color = this._color;
    }
  };

  public pick = async () => {
    const elem = Array.from(document.getElementsByTagName('*'));

    for (const el of elem) {
      (el as HTMLElement).style.cursor = '';
    }
    this._mouseElement.remove();
    navigator.clipboard.writeText(this._color);
    this.showMessage();

    document.removeEventListener('mousemove', this.move);
  };

  private showMessage = () => {
    const messageElement = document.createElement('strong');
    document.body.append(messageElement);

    let color = this._color;
    if (!this.convert2hex) color = Color.rgba2Hex(color);
    const regex = /(#[0-9a-fA-F]{6})/;
    color = regex.exec(color)?.[0] as string;
    const luma = Color.getLuminance(color);
    const textColor = luma < 120 ? '#fff' : '#333';

    messageElement.className = 'notif appear';
    messageElement.innerHTML = `
    Couleur
    <span
      style="background-color: ${this._color};
        display: inline-block;
        color: ${textColor};
        border: 1px solid;
        padding: 0.25rem 0.5rem;
        border-radius: 10px">
      "${this._color}"
    </span>
    copiée dans le presse papier !
    `;
    messageElement.addEventListener(
      'animationend',
      (event) => {
        setTimeout(() => {
          messageElement.className = 'notif disappear';
          messageElement.addEventListener('animationend', () => {
            messageElement.remove();
          });
        }, 2500);
      },
      { once: true },
    );
  };
}
