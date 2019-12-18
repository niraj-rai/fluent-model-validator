export interface LoginModel{
    username:string;
    password:string;
    systemType:string;
    url: string;
}

export const invalidLoginModel:LoginModel = {
    username: "nir",
    password: "1234",
    systemType: "  4",
    url: "www",
}

export const validLoginModel:LoginModel = {
    username: "nirajrai",
    password: "Password@124!",
    systemType: "  4",
    url: "http://www.abc.com",
}