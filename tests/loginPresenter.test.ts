import {LoginPresenter} from "../src/components/LoginPresenter";
import {LoginModel} from "../src/components/LoginModel";
import each from "jest-each";

describe('Login Presenter', () => {
  it('set email', () => {
    presenter.setEmail('test@test.com');

    expect(presenter.model.email).toBe('test@test.com');
  })

  each([
      ['test@test.com', true],
      ['INVALID-EMAIL', false]
  ]).it('should validate email', (value: string, expected: boolean) => {
    presenter.setEmail(value);

    const result = presenter.isValidEmail()

    expect(presenter.model.email).toBe(value);
    expect(result).toBe(expected);
  })

  beforeEach(() => {
    presenter = new LoginPresenter(() => {}, new LoginModel());
  })

  let presenter: LoginPresenter;
})
