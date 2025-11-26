import {LoginModel} from "./LoginModel";

export class LoginPresenter {
    model: LoginModel;

    constructor(private changeModel: (model: LoginModel) => void, model: LoginModel) {
        this.model = model;
    }

    setEmail(value: string) {
        this.updateModel({ email: value });
    }

    isValidEmail(): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(this.model.email)
    }

    updateModel(partial: Partial<LoginModel>) {
        const next = new LoginModel();
        Object.assign(next, this.model, partial);
        this.model = next;
        this.changeModel(next);
    }
}