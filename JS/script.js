document.getElementById("basicInfoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const errorIds = [
        "firstNameError", "lastNameError", "emailError",
        "phoneError", "dobError", "genderError",
        "messageError", "termsError"
    ];
    errorIds.forEach(id => document.getElementById(id).textContent = "");

    let isValid = true;

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const message = document.getElementById("message").value.trim();
    const genderInputs = document.getElementsByName("gender");
    const newsletter = document.getElementById("newsletter").checked;
    const offers = document.getElementById("offers").checked;
    const terms = document.getElementById("terms").checked;

    // Validation

    // First Name
    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "First Name is required.";
        isValid = false;
    }

    // Last Name
    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "Last Name is required.";
        isValid = false;
    }

    // Email
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Phone
    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone Number is required.";
        isValid = false;
    } else if (!/^\d{10,}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter valid phone number (at least 10 digits).";
        isValid = false;
    }

    // Gender
    let genderSelected = "";
    for (const genderInput of genderInputs) {
        if (genderInput.checked) {
            genderSelected = genderInput.value;
            break;
        }
    }
    if (genderSelected === "") {
        document.getElementById("genderError").textContent = "Please select your gender.";
        isValid = false;
    }

    // Message
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        isValid = false;
    }

    // Terms & Conditions
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to Terms & Conditions.";
        isValid = false;
    }

    if (isValid) {
        // hobbies
        const hobbyInputs = document.querySelectorAll('input[name="hobbies"]:checked');
        const hobbies = [];
        hobbyInputs.forEach(hobby => hobbies.push(hobby.value));

        // Print data in console
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            dob,
            gender: genderSelected,
            hobbies,
            message,
            newsletter,
            offers,
            termsAgreed: terms,
        };
        console.clear();
        console.log("Form submitted successfully:");
        console.table(formData);
    }
});
