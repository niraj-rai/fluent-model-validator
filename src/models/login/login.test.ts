import Validator from "../../model-validator/validator";
import {
    LoginModel,
    invalidLoginModel,
    validLoginModel
} from "./login";

const error = "Password must be 8 characters long";

const validator = new Validator<LoginModel>()
    .addRule(model => (!model.username), "User name is required")
    .addRule(model => (!model.password), "Password is required")
    .addRule(model => (model.password && (model.password.length < 8)), error)
    .isRequired(model => model.systemType, "System Type is required")
    .isInvalidUrl(model => model.url, "Please enter a valid url");

test('invalid login model', () => {
    const result = validator.validate(invalidLoginModel);
    console.log(result);
    expect(Array.isArray(result) && result.length > 0).toBeTruthy();
});

test('valid login model', () => {
    const result = validator.validate(validLoginModel);
    console.log(result);
    expect(result === true).toBeTruthy();
})
