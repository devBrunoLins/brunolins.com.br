

export class User implements IUser {
    constructor(
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public password: string = ''
    ) { }
}

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}