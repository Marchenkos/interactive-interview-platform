import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  import CompanyModel from '../../models/company.model';
  import RoleEntity from '../../../roles/dataAccess/entities/role.entity';
  
  @Entity({ name: 'employees' })
  export class CompanyEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;
  
    @Column()
    readonly companyName: string;

    @Column()
    readonly staffCount: number;

    @Column()
    readonly logo: string;

    @Column()
    readonly city: string;
  
    @Column()
    readonly country: string;

    @Column()
    readonly email: string;

    @Column()
    representative : string;

    constructor(
      firstName: string,
      image: string,
      lastName: string,
      city: string,
      country: string,
      email: string,
      role: RoleEntity
    ) {
      this.firstName = firstName;
      this.image = image;
      this.lastName = lastName;
      this.city = city;
      this.country = country;
      this.email = email;
      this.role = role;
    }
  
    static mapToEmployeeModel(companyEntity: CompanyEntity): CompanyModel {
      const {
        firstName,
        image,
        lastName,
        city,
        country,
        email,
        role
      } = companyEntity;
  
      return new CompanyModel(
        firstName,
        image,
        lastName,
        city,
        country,
        email,
        role
      );
    }
  }
  