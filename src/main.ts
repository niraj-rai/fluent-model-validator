import Validator from "./model-validator/validator";

class LoginModel{
    username:string;
    password:string;
    systemType:string;
    date:Date;
    emailId: string;
    url: string;
    zipCode: string;
}

const loginModel:LoginModel = {
    username: "null",
    password: "12323",
    systemType: "  4",
    date: new Date(),
    emailId: "niraj.rai@abc.com",
    url: "www.abc.ch",
    zipCode: null,
}

const {username, password} = loginModel;

console.log("username : " + username);
console.log("password : " + password);

const error = "Password must be 8 characters long";

const numbers = [1,3,45,];

function hasValidAge()
{
    return !(numbers && numbers.some(value=> value> 90));
}

const loginModelValidator = new Validator<LoginModel>(loginModel)
    .addRule((model) => (!model.username), "UserName is required")
    .addRule((model) => (!model.password), "Password is requred")
    .addRule((model) => (model.password && (model.password.length < 8)), error)
    .isRequired(loginModel.systemType, "System Type is required")
    .isRequired(loginModel.date, "Date is Required")
    .isInvalidEmail(loginModel.emailId, "Please enter a valid email id")
    .isInvalidUrl(loginModel.url, "Please enter a valid url")
    .isInvalidZipCode(loginModel.zipCode, "Please enter a valid Zip code", true)
    .addRule(hasValidAge, "Invalid Age");

const validationResult = loginModelValidator.validate();
loginModelValidator.clear();

console.log("Numbers:");
numbers && numbers.forEach((item, index)=>{
    console.log(item + " @Index: " + index);
})

if(validationResult === true)
{
  console.log("Validation passed.");
}
else{
    console.log("Validation failed");
    console.error(validationResult.valueOf());
}
