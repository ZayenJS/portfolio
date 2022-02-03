import { Field, ObjectType } from '@nestjs/graphql';
import { ApiError } from 'src/@types/ApiError';
import { User } from 'src/models/User';

@ObjectType()
export class UserResponse {
  @Field(() => [ApiError], { nullable: true })
  errors?: ApiError[];

  @Field(() => User, { nullable: true })
  user?: User;
}
