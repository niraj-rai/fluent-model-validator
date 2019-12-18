import { ZipCodeRegex, PassportRegex } from "./validation-regex";

class Validator<T>{
    private _errors: Array<string>;
    private _model: T;
    private _validationRules: Array<ValidationRule<T>>;
    constructor(model: T) {
        this._model = model;
        this._errors = [];
        this._validationRules = [];
    }

    public setModel(model: T) {
        this._model = model;
        this.reset();
    }

    public reset(){
        this._errors = [];
        this._validationRules = [];
    }

    public addRule(ruleFn: Func<T, boolean>, errorMessage: string): Validator<T> {
        let validationRule: ValidationRule<T> = { ruleFn: ruleFn, error: errorMessage };
        this._validationRules.push(validationRule);
        return this;
    }

    public validate(): (Array<string> | boolean) {
        this._errors = [];
        this._validationRules && this._validationRules.forEach((value) => {
            try {
                const ruleFn = value.ruleFn;
                const result = ruleFn.apply(this, [this._model])
                if (result === true)
                    this._errors.push(value.error);
            } catch (error) {
                this._errors.push(error);
            }
        })

        if (this._errors && this._errors.length > 0)
            return this._errors;
        else return true;
    }

    public clear(): void {
        delete this._errors;
        delete this._validationRules;
        this._model = undefined;
    }

    /* Common Validation Rules */
    public isRequired(value: string | number | Date, errorMessage: string): Validator<T> {
        this.addRule(() => {
            if (value) {
                if (typeof (value) === "string") {
                    const tempValue = String(value);
                    return !(tempValue.trim().length > 0)
                }
                return false;
            }
            return true;
        }, errorMessage)
        return this;
    }

    public isInvalidEmail(value: string, errorMessage: string, required: boolean = false): Validator<T> {
        this.addRule(() => {
            if (value && value.trim().length > 0) {
                const regex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                return !regex.test(value)
            }
            return (required) ? true : false;
        }, errorMessage || "Invalid emaild Id")
        return this;
    }

    public isInvalidUrl(value: string, errorMessage: string, required: boolean = false): Validator<T> {
        this.addRule(() => {
            if (value && value.trim().length > 0) {
                const regex: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)+[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
                return !regex.test(value)
            }
            return (required) ? true : false;
        }, errorMessage || "Invalid Url")
        return this;
    }

    public isInvalidPassportNumber(value: string, errorMessage: string, required: boolean = false, countryCode?: string): Validator<T> {
        this.addRule(() => {
            if (value && value.trim().length > 0) {
                const regex: RegExp = PassportRegex.DEFAULT;
                return !regex.test(value)
            }
            return (required) ? true : false;
        }, errorMessage || "Invalid Passport Number")
        return this;
    }

    public isInvalidZipCode(value: string, errorMessage: string, required: boolean = false, countryCode?: string): Validator<T> {
        this.addRule(() => {
            if (value && value.trim().length > 0) {
                const regex: RegExp = ZipCodeRegex.DEFAULT;
                return !regex.test(value)
            }
            return (required) ? true : false;
        }, errorMessage || "Invalid ZipCode")
        return this;
    }
}

export interface ValidationRule<T> {
    ruleFn: Func<T, boolean>;
    error: string;
}

export interface Func<T, TResult> {
    (item: T): TResult;
}


export default Validator;