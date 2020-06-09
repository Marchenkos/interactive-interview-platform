import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RoleEntity from './dataAccess/entities/role.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([RoleEntity]),
    ],
    controllers: [],
    providers: [],
})
export default class RoleModule {}
