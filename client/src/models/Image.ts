import { BaseModel } from './BaseModel';

export class Image extends BaseModel {
  constructor(id: number, private _url: string) {
    super(id);
  }

  public get url() {
    return this._url;
  }

  // public set url(url: string) {
  //   if (!StringUtil.isUrl(url)) return;

  //   this._url = url;
  // }

  public toString() {
    return `Image { id: ${this.id}, url: ${this.url} }`;
  }
}
