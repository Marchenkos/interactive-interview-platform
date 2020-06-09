import RoleModel from '../../roles/models/role.model';

export default class EmployeeModel {
    readonly firstName: string;
    readonly lastName: string;
    readonly image: string;
    readonly city: string;
    readonly country: string;
    readonly email: string;
    position: RoleModel;

    constructor(
        firstName: string,
        image: string,
        lastName: string,
        city: string,
        country: string,
        email: string,
        position: RoleModel
      ) {
        this.firstName = firstName;
        this.image = image;
        this.lastName = lastName;
        this.city = city;
        this.country = country;
        this.email = email;
        this.position = position;
    }
}
