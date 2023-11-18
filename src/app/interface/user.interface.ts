export interface IUserLogin {
    username: string;
    password: string;
}

export interface IUser {
    name: string;
    email: string;
    token: string;
}

export interface IUserRegister {
    name: string;
    email: string;
    password: string;
}