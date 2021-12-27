import { StringUtil } from '../utils/StringUtil';
import { BaseModel } from './BaseModel';

export class Technology extends BaseModel {
  // private _projects!: Project[];

  constructor(id: number, private _name: string, private _iconUrl: string) {
    super(id);
  }

  public get name() {
    return this._name;
  }

  // public set name(name: string) {
  //   this._name = name;
  // }

  public get iconUrl() {
    return this._iconUrl;
  }

  // public set iconUrl(url: string) {
  //   if (!StringUtil.isUrl(url)) {
  //     return;
  //   }

  //   this._iconUrl = url;
  // }
}
