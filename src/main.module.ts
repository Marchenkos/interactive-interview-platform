import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import RoleModule from './roles/role.model';

@Module({
  imports: [
    RoleModule,
    TypeOrmModule.forRoot(config.get('DATABASE').options),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class MainModule {}
