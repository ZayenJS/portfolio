import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ApiError } from 'src/@types/ApiError';

@InputType()
export class SendMailParams {
  @Field(() => String)
  public fullname: string;

  @Field(() => String)
  public email: string;

  @Field(() => String)
  public subject: string;

  @Field(() => String)
  public message: string;
}

export enum MailStatus {
  NOT_SENT = 'NOT_SENT',
  SENT = 'SENT',
  ERROR = 'ERROR',
}

@ObjectType()
export class SendMailResponse {
  @Field(() => [ApiError], { nullable: true })
  public errors?: ApiError[];

  @Field(() => String, { nullable: true })
  public message?: string;

  @Field(() => String, { nullable: true })
  public status?: MailStatus;
}
