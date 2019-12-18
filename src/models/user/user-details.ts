export interface AddressModel {
    city:string;
    state:string;
    country:string;
    zipCode: string;
    houseNo:string;
    landMark?:string;
}

export interface UserModel{
    firstName:string;
    lastName:string;
    givenName:string;
    age:number;
    emailId: string;
    address?:Array<AddressModel>;
}

export const invalidUserModel:UserModel = {
    firstName:"",
    lastName:"",
    givenName:"",
    age:1,
    emailId:"test"
}

export const validUserModel:UserModel = {
    firstName:"Bob",
    lastName:"Martin",
    givenName:"Uncle",
    age:55,
    emailId:"bob_clean_code@example.com",
    address: [{
        city:"New York",
        state:"New York",
        country:"United States",
        zipCode: "10009",
        houseNo:"35B",
        landMark:"NA",
    }]
}

