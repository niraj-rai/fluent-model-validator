import Validator from "../../model-validator/validator";
import {
    AddressModel,
    UserModel,
    invalidUserModel,
    validUserModel
} from "./user-details"

const validator = new Validator<UserModel>()
    .addRule(model => (!model.firstName), "First name is required")
    .addRule(model => (!model.lastName), "Last name is required")
    .isRequired(model=>model.givenName, "Given name is required")
    .isInvalidEmail(model=>model.emailId, "Valid email is required");

test('invalid user model', () => {
    const result = validator.validate(invalidUserModel);
    console.log(result);
    expect(Array.isArray(result) && result.length > 0).toBeTruthy();
});

test('valid user model', () => {
    const result = validator.validate(validUserModel);
    console.log(result);
    expect(result===true).toBeTruthy();
})