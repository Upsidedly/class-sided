export class Command {
    constructor(data, perm) {
        this.name = data.name;
        this.description = data.description;
        this.type = data.type;
        this.exec = data.exec;
        this.perm = perm || null;
    }
    format() {
        const format = {
            name: this.name,
            description: this.description,
            type: this.type,
            defaultPermission: this.perm === null ||
                this.perm.size === 0 ||
                ((this.perm.usersOnly === undefined || this.perm.usersOnly.length === 0) &&
                    (this.perm.rolesOnly === undefined || this.perm.rolesOnly.length === 0))
        };
        return format;
    }
}
