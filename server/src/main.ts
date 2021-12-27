import * as fs from 'fs';
import * as path from 'path';
import * as morgan from 'morgan';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, '..', 'access.log'),
    { flags: 'a' },
  );

  app.use(
    morgan(
      ':date[web] - method::method - url::url - status::status - response time:response-time ms - response size::res[content-length] - user agent::user-agent',
      {
        stream: accessLogStream,
      },
    ),
  );

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
