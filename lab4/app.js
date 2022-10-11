
const name = document.getElementById("name");
name.addEventListener("input", () => {
    name.setCustomValidity("");
    name.checkValidity();
});
name.addEventListener("invalid", () => {
    if (name.validity.patternMismatch) {
        name.setCustomValidity();
    } else {
        name.setCustomValidity();
    }
});

const age = document.getElementById("age");
age.addEventListener("input", () => {
    age.setCustomValidity("");
    age.checkValidity();
});
age.addEventListener("invalid", () => {
    if (age.validity.rangeOverflow) {
        age.setCustomValidity()
    }
    else if (age.validity.rangeUnderflow) {
        age.setCustomValidity("age  should be greater than are equal to 18")
    }
    else {
        age.setCustomValidity("Enter a Valid age")
    }
});

const mobile = document.getElementById("mobile");
mobile.addEventListener("input", () => {
    mobile.setCustomValidity("");
    mobile.checkValidity();
});
mobile.addEventListener("invalid", () => {
    if (mobile.validity.valueMissing) {
        mobile.setCustomValidity("Please enter a Mobile Number of 10 digits");
    }
    else if (mobile.validity.patternMismatch) {
        mobile.setCustomValidity("Please enter a correct Pattern");
    }
    else {
        mobile.setCustomValidity("Enter a Valid Phone number");
    }
});

const pincode = document.getElementById("pincode");
pincode.addEventListener("input", () => {
    pincode.setCustomValidity("");
    pincode.checkValidity();
});
pincode.addEventListener("invalid", () => {
    if (pincode.validity.valueMissing) {
        pincode.setCustomValidity("pincode is empty")
    }
    else if (Zipcode.validity.patternMismatch) {
        pincode.setCustomValidity("Enter a valid pincode")
    }
    else {
        pincode.setCustomValidity("Enter a proper pincode again");
    }
});

