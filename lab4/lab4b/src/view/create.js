init.view.create = {
    setupUI: function () {
        const name = document.getElementById("name");
        const age = document.getElementById("age");
        const mobile = document.getElementById("mobile");
        age.addEventListener("input", () => {
            age.setCustomValidity("");
            age.checkValidity();
        });
        mobile.addEventListener("input", () => {
            mobile.setCustomValidity("");
            mobile.checkValidity();
        });
        name.addEventListener("input", () => {
            name.setCustomValidity("");
            name.checkValidity();
        });

        name.addEventListener("invalid", () => { Music.checkName(name) });
        age.addEventListener("invalid", () => { Music.checkAge(age) });
        mobile.addEventListener("invalid", () => { Music.checkMobile(mobile) });
    }
}