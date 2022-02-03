export enum InputName {
  FULL_NAME = 'fullname',
  EMAIL = 'email',
  SUBJECT = 'subject',
  MESSAGE = 'message',
  PASSWORD = 'password',
}

export type ContactInputField =
  | InputName.FULL_NAME
  | InputName.EMAIL
  | InputName.SUBJECT
  | InputName.MESSAGE;
