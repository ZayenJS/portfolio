import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ApiError {
  @Field({ nullable: true })
  field?: string;

  @Field({ nullable: true })
  type?: string;

  @Field()
  message!: string;
}
