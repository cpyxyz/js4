class Music {
    constructor(name, age, mobile) {
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }
    static checkName(name) {
        if (name.validity.patternMismatch) {
            name.setCustomValidity();
        } else {
            name.setCustomValidity();
        }
    }
    static checkAge(age) {
        if (age.validity.rangeOverflow) {
            age.setCustomValidity("age < 60")
        }
        else if (age.validity.rangeUnderflow) {
            age.setCustomValidity("age  should be greater than or equal to 18")
        }
        else {
            age.setCustomValidity("Enter a Valid age")
        }
    }
    static checkMobile(mobile) {
        if (mobile.validity.valueMissing) {
            mobile.setCustomValidity("Please enter a Mobile Number of 10 digits");
        }
        else if (mobile.validity.patternMismatch) {
            mobile.setCustomValidity("Please enter a correct Pattern");
        }
        else {
            mobile.setCustomValidity("Enter a Valid Phone number");
        }
    }

}