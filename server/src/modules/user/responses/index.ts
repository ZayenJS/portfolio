import { Field, ObjectType } from '@nestjs/graphql';
import { Error } from 'src/@types/Error';
import { User } from 'src/models/User';

@ObjectType()
export class UserResponse {
  @Field(() => [Error], { nullable: true })
  errors?: Error[];

  @Field(() => User, { nullable: true })
  user?: User;
}
