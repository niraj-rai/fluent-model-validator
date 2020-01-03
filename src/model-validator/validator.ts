import { ZipCodeRegex, PassportRegex } from "./validation-regex";

export class Validator<T>{
    private _errors: Array<string>;
    private _model: T;
    private _validationRules: Array<ValidationRule<T>>;

    /**
     * Creates an instance of validator.
     */
    constructor() {
        this._errors = [];
        this._validationRules = [];
    }

    private reset(model: T) {
        this._model = model ? model : this._model; 
        this._errors = [];
    }

    /**
     * Adds rule
     * @param ruleFn 
     * @param errorMessage 
     * @returns Validator 
     */
    public addRule(ruleFn: Func<T, boolean>, errorMessage: string): Validator<T> {
        let validationRule: ValidationRule<T> = { ruleFn: ruleFn, error: errorMessage };
        this._validationRules.push(validationRule);
        return this;
    }

    /**
     * Validates given model against setup rule.
     * @param model 
     * @returns true or string[]
     */
    public validate(model: T): (Array<string> | boolean) {
        this.reset(model);
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

    /**
     * Clears validator
     */
    public clear(): void {
        delete this._errors;
        delete this._validationRules;
        this._model = undefined;
    }

    /* Common Validation Rules */
    /**
     * Adds a required validation rule.
     * @param expr 
     * @param errorMessage 
     * @returns Validator 
     */
    public isRequired(expr: Func<T, any>, errorMessage: string): Validator<T> {
        this.addRule((model) => {
            const value = expr.apply(this, [model]);
            console.log("Required Value: ", value);
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

    /**
     * Adds an email validation rule.
     * @param expr 
     * @param errorMessage 
     * @param [required] 
     * @returns Validator
     */
    public isInvalidEmail(expr: Func<T, string>, errorMessage: string, required: boolean = false): Validator<T> {
        this.addRule((model) => {
            const value = expr.apply(this, [model]);
            console.log("Email Value: ", value);
            if (value && value.trim().length > 0) {
                const regex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                return !regex.test(value)
            }
            return (required) ? true : false;
        }, errorMessage || "Invalid emaild Id")
        return this;
    }

    /**
     * Adds an Url validation rule.
     * @param expr 
     * @param errorMessage 
     * @param [required] 
     * @returns Validator
     */
    public isInvalidUrl(expr: Func<T, string>, errorMessage: string, required: boolean = false): Validator<T> {
        this.addRule((model) => {
            const value = expr.apply(this, [model]);
            console.log("Url Value: ", value);
            if (value && value.trim().length > 0) {
                const regex: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)+[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
                return !regex.test(value)
            }
            return (required) ? true : false;
        }, errorMessage || "Invalid Url")
        return this;
    }

    /**
     * Adds a passport validation rule.
     * @param expr 
     * @param errorMessage 
     * @param [required] 
     * @param [countryCode] 
     * @returns Validator
     */
    public isInvalidPassportNumber(expr: Func<string, string>, errorMessage: string, required: boolean = false, countryCode?: string): Validator<T> {
        this.addRule((model) => {
            const value = expr.apply(this, [model]);
            console.log("Passport Value: ", value);
            if (value && value.trim().length > 0) {
                const regex: RegExp = PassportRegex.DEFAULT;
                return !regex.test(value)
            }
            return (required) ? true : false;
        }, errorMessage || "Invalid Passport Number")
        return this;
    }

    /**
     * Adds a zip code validation rule.
     * @param expr 
     * @param errorMessage 
     * @param [required] 
     * @param [countryCode] 
     * @returns Validator
     */
    public isInvalidZipCode(expr: Func<T, string>, errorMessage: string, required: boolean = false, countryCode?: string): Validator<T> {
        this.addRule((model) => {
            const value = expr.apply(this, [model]);
            console.log("Zip code Value: ", value);
            if (value && value.trim().length > 0) {
                const regex: RegExp = ZipCodeRegex.DEFAULT;
                return !regex.test(value)
            }
            return (required) ? true : false;
        }, errorMessage || "Invalid ZipCode")
        return this;
    }
}

/**
 * Validation rule
 * @template T 
 */
export interface ValidationRule<T> {
    ruleFn: Func<T, boolean>;
    error: string;
}

/**
 * Func
 * @template T 
 * @template TResult 
 */
export interface Func<T, TResult> {
    (item: T): TResult;
}

export default Validator;