import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from '../projects/projects.module';
import { TechnologiesModule } from '../technologies/technologies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User';
import { Technology } from 'src/models/Technology';
import { Project } from 'src/models/Project';
import { Image } from 'src/models/Image';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Context } from 'src/classes/Context';
import { AppResolver } from './app.resolver';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ProjectsModule,
    TechnologiesModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: process.env.DB_URI,
      entities: [User, Technology, Project, Image],
      logging: true,
      synchronize: false,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        credentials: true,
        origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
      },
      context: ({ req, res }: Context) => ({ req, res }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
