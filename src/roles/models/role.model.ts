export default class RoleModel {
    readonly name: string;
    readonly permitions: string;

    constructor(name: string, permitions: string) {
        this.name = name;
        this.permitions = permitions;
    }
}
