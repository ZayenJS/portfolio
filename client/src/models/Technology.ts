import { Technos } from '.';
import { StringUtil } from '../utils/StringUtil';
import { BaseModel } from './BaseModel';

export class Technology extends BaseModel {
  // private _projects!: Project[];
  private _iconUrl: string;

  constructor(id: number, private _name: Technos, _iconUrl?: string) {
    super(id);
    this._iconUrl = _iconUrl ?? require(`../assets/images/icons/${_name.toLowerCase()}.svg`);
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

  // public get projects() {
  //   return this._projects;
  // }

  public toString() {
    return `Technology { id: ${this.id}, name: ${this.name}, iconUrl: ${this.iconUrl} }`;
  }
}
