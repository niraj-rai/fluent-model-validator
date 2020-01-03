import Validator from "../src/model-validator/validator";
import { invalidLoginModel, LoginModel } from "../src/models/login/login";

// TODO: This test case will be removed from here.
// this test file will consist only basic validation.

test('invalid login model', () => {
  const error = "Password must be 8 characters long";
  const model = invalidLoginModel;
  const validator = new Validator<LoginModel>()
    .addRule((model) => (!model.username), "User name is required")
    .addRule((model) => (!model.password), "Password is required")
    .addRule((model) => (model.password && (model.password.length < 8)), error)
    .isRequired(model => model.systemType, "System Type is required")
    .isInvalidUrl(model => model.url, "Please enter a valid url");
  const result = validator.validate(invalidLoginModel);
  expect(Array.isArray(result) && result.length > 0).toBeTruthy();
});