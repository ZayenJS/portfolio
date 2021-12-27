export class Color {
  public static getLuminance = (hexColor: string) => {
    const c = hexColor.substring(1); // strip #
    const rgb = parseInt(c, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue

    return 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  };

  public static rgba2Hex = (rgba: string) => {
    let a;
    const rgb = rgba.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
    const alpha = ((rgb && rgb[4]) || '').trim();
    const hex = rgb
      ? (+rgb[1] | (1 << 8)).toString(16).slice(1) +
        (+rgb[2] | (1 << 8)).toString(16).slice(1) +
        (+rgb[3] | (1 << 8)).toString(16).slice(1)
      : rgba;

    a = alpha !== '' ? alpha : 0o1;
    // multiply before convert to HEX
    a = ((+a * 255) | (1 << 8)).toString(16).slice(1);
    return `#${hex}${a}`;
  };
}
