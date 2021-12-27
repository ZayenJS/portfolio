import { StringUtil } from '../utils/StringUtil';

export abstract class BaseModel {
  protected readonly _createdAt: string | number = new Date().getTime();
  protected _updatedAt: string | null = null;

  constructor(protected readonly _id: number) {}

  public get id() {
    return this._id;
  }

  public get createdAt() {
    return this._createdAt;
  }

  public get updatedAt() {
    return this._updatedAt;
  }

  // public set updatedAt(updatedAt: string | null) {
  //   if (updatedAt === null) return;

  //   const isDate = StringUtil.isDate(updatedAt);

  //   if (isDate) this._updatedAt = updatedAt;
  // }
}
