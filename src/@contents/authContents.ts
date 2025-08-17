export const authContents = {
    title: "Sign Up",
    description: "Create an account to get started with our app.",
    buttonText: "Sign Up",
    formFields:
    {
        firstName: {
            label: "First Name",
            name: "firstName",
            type: "text",
            placeholder: "Enter your first name",
            required: true,
        },
        lastName: {
            label: "Last Name",
            name: "lastName",
            type: "text",
            placeholder: "Enter your last name",
            required: true,
        },
        email: {
            label: "Email Address",
            name: "email",
            type: "email",
            placeholder: "Enter your email address",
            required: true,
        },
        password: {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Create a password",
            required: true,
        },
        phone: {
            label: "Phone Number",
            name: "phone",
            type: "tel",
            placeholder: "Enter your phone number",
            required: true,
        },
        address: {
            label: "Address",
            name: "address",
            type: "text",
            placeholder: "Enter your address",
            required: true,
        },
        confirmPassword: {
            label: "Confirm Password",
            name: "confirmPassword",
            type: "password",
            placeholder: "Re-enter your password",
            required: true,
        },
        role: {
            label: "Role",
            name: "role",
            type: "select",
            options: [
                { value: "user", label: "User" },
                { value: "admin", label: "Admin" },
            ],
            required: true,
        },
        accepted: {
            label: "Accept Terms",
            name: "accepted",
            type: "checkbox",
            required: true,
        },
    },

    links:
    {
        alreadyAccount: {
            text: "Already have an account?",
            linkText: "Log In",
            href: "/auth/login",
        },
        resetPass: {
            text: "Forgot your password?",
            linkText: "Reset it here",
            href: "/auth/forgot-password",
        },
    }
    ,
    errorMessage: {
        firstNameLenErrMsg: "First Name must be at least 6 characters or at most 30 characters.",
        lastNameLenErrMsg: "Last Name must be at least 6 characters or at most 30 characters.",
        userOrEmailLenErrMsg: "Username or Email must be between 6 and 30 characters.",
        useremailErrMsg: "Username must be a valid email.",
        pwdLenErrMsg: "Invalid password: Min 8 characters.",
        pwdMatchErrMsg: "Passwords do not match.",
        emailLenErrMsg: "Email must be between 6 and 100 characters.",
        emailErrMsg: "Email must be a valid email.",
        otpIncorrectErrMsg: "Please input correct code",
        termsAndConditionMsg: "Please accept all terms and conditions",
        invalidCred: "Invalid username or password",
        noSpecialCharacter: "No special character allowed!",
        passwordValidationMsg:
            "Password must contain at least 8 characters, including a number, an uppercase & a lowercase letter.",
        userNameExistsMsg: "This username is invalid or already used",
        userNameValidation: "Username can only contain alphanumeric characters and underscores",
        emailAlreadyExistingMsg: "This email is already in use",
        successMessage: "An email has been sent with a link to reset your password."
    },

}