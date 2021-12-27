import { StringUtil } from '../utils/StringUtil';
import { BaseModel } from './BaseModel';
import { Technology } from './Technology';

export class Project extends BaseModel {
  private _images: string[] = [];
  private _technologies: Technology[] = [];

  constructor(
    id: number,
    private _name: string,
    private _description: string,
    private _url: string | null,
    private _repository: string | null,
  ) {
    super(id);
  }

  public get name() {
    return this._name;
  }

  // public set name(name: string) {
  //   this._name = name;
  // }

  public get description() {
    return this._description;
  }

  // public set description(description: string) {
  //   this._description = description;
  // }

  public get url() {
    return this._url;
  }

  // public set url(url: string | null) {
  //   if (url && !StringUtil.isUrl(url)) return;

  //   this._url = url;
  // }

  public get repository() {
    return this._repository;
  }

  // public set repository(repo: string | null) {
  //   if (repo && !StringUtil.isUrl(repo)) return;

  //   this._repository = repo;
  // }

  public get images() {
    return this._images;
  }

  public get technologies() {
    return this._technologies;
  }
}
