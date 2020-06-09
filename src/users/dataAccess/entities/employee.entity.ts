import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  import EmployeeModel from '../../models/employee.model';
  import RoleEntity from '../../../roles/dataAccess/entities/role.entity';
  
  @Entity({ name: 'employees' })
  export class EmployeeEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;
  
    @Column()
    readonly firstName: string;

    @Column()
    readonly lastName: string;

    @Column()
    readonly image: string;

    @Column()
    readonly city: string;
  
    @Column()
    readonly country: string;

    @Column()
    readonly email: string;

    @Column()
    position: RoleEntity;

    constructor(
      firstName: string,
      image: string,
      lastName: string,
      city: string,
      country: string,
      email: string,
      position: RoleEntity
    ) {
      this.firstName = firstName;
      this.image = image;
      this.lastName = lastName;
      this.city = city;
      this.country = country;
      this.email = email;
      this.position = position;
    }
  
    static mapToEmployeeModel(employeeEntity: EmployeeEntity): EmployeeModel {
      const {
        firstName,
        image,
        lastName,
        city,
        country,
        email,
        position
      } = employeeEntity;
  
      return new EmployeeModel(
        firstName,
        image,
        lastName,
        city,
        country,
        email,
        position
      );
    }
  }
  