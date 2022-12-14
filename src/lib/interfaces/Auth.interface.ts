import { IUser } from "./User.interface";

export interface ICredential {
    username: string;
    password: string;
}

export interface ILoginResonse {
    access_token: string;
}

export type IRegister = Omit<IUser, "id">

export interface IAuthState {
    access_token: string | null;
    isAuthenticated: boolean
}