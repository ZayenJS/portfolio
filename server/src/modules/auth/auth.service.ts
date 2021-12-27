import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import * as validator from 'validator';

import { Context } from 'src/classes/Context';
import { ErrorMessage, ErrorType } from 'src/constants';
import { User } from 'src/models/User';
import { UserLoginData } from '../user/inputTypes';
import { UserResponse } from '../user/responses';

@Injectable()
export class AuthService {
  public checkAuth({ req }: Context) {
    const response: UserResponse = { errors: [] };

    // TODO: implement check auth
    return response;
  }

  public async login(data: UserLoginData, { req, res }: Context) {
    const { password, emailOrUsername } = data;
    const response: UserResponse = { errors: [] };

    type RequiredFields = 'emailOrUsername' | 'password';
    const requiredFields: RequiredFields[] = ['emailOrUsername', 'password'];

    for (const requiredField of requiredFields) {
      if (validator.isEmpty(requiredField)) {
        response.errors.push({
          type: ErrorType.EMPTY_FIELD,
          field: requiredField,
          message: ErrorMessage.EMPTY_FIELD,
        });

        return response;
      }
    }

    const user = await User.findOne({
      where: [{ username: emailOrUsername }, { email: emailOrUsername }],
    });

    if (!user || !(await argon2.verify(user?.password, password))) {
      response.errors = [
        { message: ErrorMessage.LOGIN_FAILURE, type: ErrorType.LOGIN_FAILURE },
      ];

      return response;
    }

    response.user = user;

    return response;
  }

  public async logout({ req }: Context) {
    // TODO: implement logout

    return { message: 'not implemented' };
  }
}
