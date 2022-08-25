export interface ILoginResponse {
    token?: string;
    id?: string;
    email?: string;
    roles?: IRole[]
}

export interface IRole {
    name?: string;
}