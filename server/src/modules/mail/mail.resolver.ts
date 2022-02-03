import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SendMailParams, SendMailResponse } from './DTO/SendMail';
import { MailService } from './mail.service';

@Resolver()
export class MailResolver {
  constructor(private readonly mailService: MailService) {}

  @Mutation(() => SendMailResponse)
  public async sendMail(@Args('data') data: SendMailParams) {
    return this.mailService.sendMail(data);
  }
}
