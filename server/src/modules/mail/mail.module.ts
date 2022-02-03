import { Module } from '@nestjs/common';
import { MailResolver } from './mail.resolver';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  providers: [MailResolver, MailService],
  controllers: [MailController]
})
export class MailModule {}
