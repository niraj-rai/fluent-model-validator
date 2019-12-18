import Validator from "../../model-validator/validator";
import {
    LoginModel, 
    invalidLoginModel,
    validLoginModel
} from "./login";

const error = "Password must be 8 characters long";

let model:LoginModel = invalidLoginModel;
const validator = new Validator<LoginModel>(model)
    .addRule((model) => (!model.username), "User name is required")
    .addRule((model) => (!model.password), "Password is required")
    .addRule((model) => (model.password && (model.password.length < 8)), error)
    .isRequired(model.systemType, "System Type is required")
    .isInvalidUrl(model.url, "Please enter a valid url");

export function runLoginValidation() {
    console.log("--------------For invalid Login Model------------------------");
    //For invalid model
    let validationResult = validator.validate();
    console.log(validationResult);

    console.log("--------------For valid Login Model------------------------");
    //For valid model
    model = validLoginModel;
    validator.setModel(model);
    validationResult = validator.validate();
    console.log(validationResult);
}
