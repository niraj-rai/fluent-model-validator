import Validator from "../../model-validator/validator";
import {
    AddressModel,
    UserModel,
    invalidUserModel,
    validUserModel
} from "./user-details"

let model:UserModel = invalidUserModel;
const validator = new Validator<UserModel>(model)
    .addRule((model) => (!model.firstName), "First name is required")
    .addRule((model) => (!model.lastName), "Last name is required")
    .isRequired(model.givenName, "Given name is required")
    .isInvalidEmail(model.emailId, "Valid email is required");

export function runUserValidation() {
    console.log("--------------For invalid user Model------------------------");
    //For invalid model
    let validationResult = validator.validate();
    console.log(validationResult);

    console.log("--------------For valid user Model------------------------");
    //For valid model
    model = validUserModel;
    validator.setModel(model);
    validationResult = validator.validate();
    console.log(validationResult);
}

test('invalid user model', () => {
    const result = validator.validate();
    expect(Array.isArray(result) && result.length > 0).toBeTruthy();
});

test('valid user model', () => {
    validator.setModel(validUserModel);
    const result = validator.validate();
    console.log(result);
    expect(result===true).toBeTruthy();
})