import Validator from "../src/model-validator/validator";
import { invalidLoginModel, LoginModel } from "../src/models/login/login";

// TODO: This test case will be removed from here.
// this test file will consits only basic validation.

test('invalid login model', () => {
  const error = "Password must be 8 characters long";
  const model = invalidLoginModel;
  const validator = new Validator<LoginModel>(model)
    .addRule((model) => (!model.username), "User name is required")
    .addRule((model) => (!model.password), "Password is required")
    .addRule((model) => (model.password && (model.password.length < 8)), error)
    .isRequired(model.systemType, "System Type is required")
    .isInvalidUrl(model.url, "Please enter a valid url");
  const result = validator.validate();
  expect(Array.isArray(result) && result.length > 0).toBeTruthy();
});