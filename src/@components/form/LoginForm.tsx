"use client";
import AuthLayout from "@/@layouts/authLayout";
import FormLayout from "@/@layouts/FormLayout";
import { authService } from "@/@services/authServices";
import loginSetStore, { loginSchema } from "@/@store/loginManagementStore";
import { validateForm } from "@/@utils";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import LoaderWrapper from "../common/LoaderWrapper";
import Button from "../ui/Button";
import FormControl from "../ui/FormControl";
import Input from "../ui/Input";

const LoginForm = () => {
  const router = useRouter();
  const {
    loginFormFields,
    setLoginFormFields,
    resetForm,
    loginFormErrors,
    setLoginFormErrors,
  } = loginSetStore();
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormFields({ ...loginFormFields, [name]: value });
    setLoginFormErrors({
      ...loginFormErrors,
      [name]: "",
    });
  };

  const handleOnBlurValidation: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (e) => {
    const { name, value } = e.target;
    const schemaField = name as keyof typeof loginSchema.shape;

    try {
      // Validate the field using the schema
      loginSchema.shape[schemaField].parse(value);
      setLoginFormErrors({
        ...loginFormErrors,
        [name]: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: error.errors[0].message,
        });
      }
    }
  };

  const onSubmit = async () => {
    setShowBackdrop(true);
    let res = null;
    const { validationErrors, hasError } = validateForm(
      loginSchema,
      loginFormFields
    );

    if (hasError) {
      setLoginFormErrors(validationErrors);
      return;
    }

    try {
      const { data, error } = await authService.loginWithCredential({
        email: loginFormFields.email,
        password: loginFormFields.password,
      });

      if (!error) {
        res = await signIn("email-sign-in", {
          redirect: false,
          email: loginFormFields.email.toLowerCase(),
          password: loginFormFields.password,
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
      }
    } catch (error) {
      console.error(error);
    } finally {
      setShowBackdrop(false);
      resetForm();
    }
  };

  return (
    <AuthLayout>
      <div className="flex-grow flex justify-center items-center min-h-[80vh] mt-10 px-4">
        <form className="w-full max-w-[520px]">
          <div className="w-full mx-auto shadow-2xl bg-white/60 backdrop-blur-lg border border-white/40 p-8 rounded-2xl my-3">
            {showBackdrop && <LoaderWrapper show={showBackdrop} />}
            <div className="mb-6 flex flex-col items-center text-center">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt="Cloud Kitchen Logo"
                width={72}
                height={72}
                className="mb-3 drop-shadow"
              />
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text mb-2">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-600 max-w-sm">
                Log in to track orders, explore new home-chef menus, and manage
                your account.
              </p>
            </div>
            <FormLayout>
              <FormControl key="email" label="">
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  value={loginFormFields.email}
                  onChange={handleChange}
                  error={loginFormErrors.email}
                  className="w-full"
                  onBlur={handleOnBlurValidation}
                  autoComplete="email"
                />
              </FormControl>
              <div>
                <FormControl key="password" label="">
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    value={loginFormFields.password}
                    onChange={handleChange}
                    error={loginFormErrors.password}
                    className="w-full"
                    onBlur={handleOnBlurValidation}
                    autoComplete="current-password"
                  />
                </FormControl>
                <p className="text-right text-sm mt-2 text-bold">
                  <a
                    href="/forgot-password"
                    className="text-primary hover:underline"
                  >
                    Forgot Password?
                  </a>
                </p>
              </div>
              <Button
                type="submit"
                onClick={onSubmit}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-base text-white py-3 px-4 rounded-xl hover:opacity-90 mt-3 font-semibold shadow"
              >
                Log In
              </Button>
            </FormLayout>

            <p className="text-center text-sm mt-4 text-gray-600">
              New here?{" "}
              <a
                href="/signup"
                className="text-orange-600 font-medium hover:underline"
              >
                Create an account
              </a>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
