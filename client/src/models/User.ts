import { BaseModel } from './BaseModel';

export enum UserType {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export class User extends BaseModel {
  constructor(
    id: number,
    private _firstName: string,
    private _lastName: string,
    private _username: string,
    private _email: string,
    private _type: UserType,
  ) {
    super(id);
  }

  public get firstName() {
    return this._firstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public get username() {
    return this._username;
  }

  public get email() {
    return this._email;
  }

  public get type() {
    return this._type;
  }
}
