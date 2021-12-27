import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Context as Ctx } from 'src/classes/Context';
import { UserLoginData } from '../user/inputTypes';
import { UserResponse } from '../user/responses';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => UserResponse)
  async checkAuth(@Context() context: Ctx) {
    return this.authService.checkAuth(context);
  }

  @Mutation(() => UserResponse)
  login(@Args('data') data: UserLoginData, @Context() context: Ctx) {
    return this.authService.login(data, context);
  }

  @Mutation(() => Boolean)
  logout(@Context() context: Ctx) {
    return this.authService.logout(context);
  }
}
