"use client";
import { authContents } from "@/@contents/authContents";
import AuthLayout from "@/@layouts/authLayout";
import { GOOGLE_LOGIN_URL } from "@/@services/apiEndpoints";
import { useRouter } from "next/navigation";
import React from "react";

import googleLogoIcon from "@/@icons/google-logo.svg";
import FormLayout from "@/@layouts/FormLayout";
import { authService } from "@/@services/authServices";
import signupSetStore, {
  authWarningMessage,
  signUpSchema,
} from "@/@store/authManagementStore";
import { validateForm } from "@/@utils";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { toast } from "react-toastify";
import { z } from "zod";
import LoaderWrapper from "../common/LoaderWrapper";
import Button from "../ui/Button";
import FormControl from "../ui/FormControl";
import Input from "../ui/Input";

const SignUpForm = () => {
  const router = useRouter();
  const { formFields, buttonText } = authContents;
  const {
    signupFormFields,
    setSignupFormFields,
    resetForm,
    signupFormErrors,
    setSignupFormErrors,
  } = signupSetStore();
  const [showBackdrop, setShowBackdrop] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupFormFields({ ...signupFormFields, [name]: value });
    setSignupFormErrors({
      ...signupFormErrors,
      [name]: "",
    });
    if (name === "password") {
      setSignupFormErrors({ ...signupFormErrors, password: "" });
      if (value === signupFormFields.confirmPassword) {
        setSignupFormErrors({
          ...signupFormErrors,
          [name]: "",
          confirmPassword: "",
        });
      } else {
        setSignupFormErrors({
          ...signupFormErrors,
          confirmPassword: "Passwords do not match",
        });
      }
    }
  };

  const handleOnBlurValidation = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const schemaField = name as keyof typeof signUpSchema;
    const schema = (signUpSchema._def.schema as z.ZodObject<any>).shape[
      schemaField
    ];

    try {
      // Validate the field using the schema
      schema.parse(value);
      setSignupFormErrors({
        ...signupFormErrors,
        [name]: "",
      });

      // Additional validation for confirmPassword
      if (name === "confirmPassword" && value !== signupFormFields.password) {
        setSignupFormErrors({
          ...signupFormErrors,
          confirmPassword: "Passwords do not match",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setSignupFormErrors({
          ...signupFormErrors,
          [name]: error.errors[0].message,
        });
      }
    }
  };

  const onSubmit = async () => {
    setShowBackdrop(true);
    let res = null;
    // Validate the form data using the password schema
    const { validationErrors, hasError } = validateForm(
      signUpSchema,
      signupFormFields
    );

    if (hasError) {
      // Set the validation errors in the store
      setSignupFormErrors(validationErrors);
      // Check if the password field is empty and set custom errors
      if (!signupFormFields.password) {
        setSignupFormErrors({
          ...signupFormErrors,
          password: authWarningMessage.password,
        });
      }

      if (!signupFormFields.email) {
        setSignupFormErrors({
          ...signupFormErrors,
          email: authWarningMessage.email,
        });
      }
      return;
    }
    try {
      setShowBackdrop(true);
      const { data, error } = await authService.signupWithCredential({
        email: signupFormFields.email,
        firstName: signupFormFields.firstName,
        lastName: signupFormFields.lastName,
        phone: signupFormFields.phone,
        address: signupFormFields.address,
        role: "user",
        password: signupFormFields.password,
      });
      if (!error) {
        res = await signIn("email-sign-in", {
          redirect: false,
          email: signupFormFields.email.toLowerCase(),
          password: signupFormFields.password,
        });
        if (!res || !res?.ok || error) {
          setShowBackdrop(false);
          return;
        } else {
          router.push("/");
        }
      } else {
        setShowBackdrop(false);
        if (data.message) {
          toast.error(data.message);
        }
        // if (data.email[0]) {
        //   setShowAlreadyUsedEmailAddressError(true);
        // }
      }
    } catch (error) {
      console.error(error);
      // Todo: handle api error
    } finally {
      setShowBackdrop(false);
      resetForm();
    }
  };

  const handleGoogleLogin = () => {
    setShowBackdrop(true);
    router.push(GOOGLE_LOGIN_URL);
  };

  // const { isDirty, errors } = form.formState;

  return (
    <AuthLayout>
      <div className="w-full max-w-[640px] mx-auto shadow-2xl bg-white/60 backdrop-blur-lg border border-white/40 p-10 rounded-2xl my-16 flex flex-col justify-center items-center">
        {showBackdrop && <LoaderWrapper show={showBackdrop} />}
        <form>
          <div className="mb-6 flex flex-col items-center text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="Cloud Kitchen Logo"
              width={72}
              height={72}
              className="mb-3 drop-shadow"
            />
            <h1 className="text-center text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Create Account
            </h1>
            <p className="text-center text-sm text-gray-600 max-w-sm">
              Join our cloud kitchen community. Discover authentic meals or
              start selling your own dishes.
            </p>
          </div>
          <FormLayout>
            <div className="lg:flex gap-2 justify-between items-start">
              <FormControl key="firstName" label="">
                <Input
                  type="text"
                  label={formFields.firstName.label}
                  name={formFields.firstName.name}
                  value={signupFormFields.firstName}
                  onChange={handleChange}
                  error={signupFormErrors.firstName}
                  className="w-full"
                  onBlur={handleOnBlurValidation}
                />
              </FormControl>
              <FormControl key="lastName" label="">
                <Input
                  type="text"
                  label={formFields.lastName.label}
                  name={formFields.lastName.name}
                  value={signupFormFields.lastName}
                  onChange={handleChange}
                  error={signupFormErrors.lastName}
                  onBlur={handleOnBlurValidation}
                  className="w-full"
                />
              </FormControl>
            </div>
            <FormControl key="email" label="">
              <Input
                type="email"
                label={formFields.email.label}
                name={formFields.email.name}
                value={signupFormFields.email}
                onChange={handleChange}
                error={signupFormErrors.email}
                className="w-full"
                onBlur={handleOnBlurValidation}
              />
            </FormControl>
            <FormControl key="phone" label="">
              <Input
                type="tel"
                label={formFields.phone.label}
                name={formFields.phone.name}
                value={signupFormFields.phone}
                onChange={handleChange}
                error={signupFormErrors.phone}
                className="w-full"
                onBlur={handleOnBlurValidation}
              />
            </FormControl>
            <FormControl key="address" label="">
              <Input
                type="text"
                label={formFields.address.label}
                name={formFields.address.name}
                value={signupFormFields.address}
                onChange={handleChange}
                error={signupFormErrors.address}
                className="w-full"
                onBlur={handleOnBlurValidation}
              />
            </FormControl>
            <FormControl key="password" label="">
              <Input
                type="password"
                label={formFields.password.label}
                name={formFields.password.name}
                value={signupFormFields.password}
                onChange={handleChange}
                error={signupFormErrors.password}
                className="w-full"
                onBlur={handleOnBlurValidation}
              />
            </FormControl>
            <FormControl key="confirmPassword" label="">
              <Input
                type="password"
                label={formFields.confirmPassword.label}
                name={formFields.confirmPassword.name}
                value={signupFormFields.confirmPassword}
                onChange={handleChange}
                error={signupFormErrors.confirmPassword}
                className="w-full"
                onBlur={handleOnBlurValidation}
              />
            </FormControl>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                // value=""
                checked={signupFormFields.terms}
                onChange={() =>
                  setSignupFormFields({
                    ...signupFormFields,
                    terms: !signupFormFields.terms,
                  })
                }
                className="mr-2 text-primary focus:ring-primary"
              />
              <label htmlFor="" className="text-gray-700">
                <span className="text-center text-xs text-black-400">
                  By continuing, you agree to the{" "}
                  <a
                    href="#"
                    target="_blank"
                    className="text-primary hover:text-blue-500 active:text-blue-300 cursor-pointer"
                  >
                    Terms of Service
                  </a>{" "}
                  &{" "}
                  <a
                    href="#"
                    target="_blank"
                    className="text-primary hover:text-blue-500 active:text-blue-300 cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            {/* {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )} */}

            <Button
              type="submit"
              onClick={onSubmit}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-4 rounded-xl hover:opacity-90 mt-3 font-semibold shadow"
            >
              Sign Up
            </Button>
          </FormLayout>
          <div className={`flex w-full items-center px-7 py-3`}>
            <div className={`bg-gray-400 h-[1px] flex-1`}></div>
            <p className={`px-6 text-stroke text-xs`}>{"or"}</p>
            <div className={`bg-gray-400 h-[1px] flex-1`}></div>
          </div>
          <Button
            variant="outlined"
            className="w-full text-base !border-orange-300 hover:!border-orange-500 py-2 bg-white/40 backdrop-blur-md"
            onClick={() => handleGoogleLogin()}
          >
            <Image
              height={16}
              src={googleLogoIcon}
              alt="google logo"
              className="mr-2"
            />
            <span className="text-base font-medium">Sign up with Google</span>
          </Button>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-orange-600 font-medium hover:underline"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUpForm;
