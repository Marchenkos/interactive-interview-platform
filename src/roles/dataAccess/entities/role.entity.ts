import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import RoleModel from '../../models/role.model';

@Entity({ name: 'roles' })
export default class RoleEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    readonly name: string;

    @Column()
    readonly permitions: string;

    constructor(name: string, permitions: string) {
        this.name = name;
        this.permitions = permitions;
    }

    static mapToRoleModel(roleEntity: RoleEntity): RoleModel {
        const { name, permitions } = roleEntity;

        return new RoleModel(name, permitions);
    }
}
