import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserLoginData {
  @Field(() => String, { nullable: false })
  public emailOrUsername!: string;

  @Field(() => String, { nullable: false })
  public password!: string;
}
