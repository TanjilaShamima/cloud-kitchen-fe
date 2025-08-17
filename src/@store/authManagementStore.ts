import React from 'react';
import { z } from "zod";
import { create } from "zustand";

// Define warning messages for password validation
export const authWarningMessage = {
    firstName: "First Name must be at least 3 characters or at most 20 characters",
    lastName: "Last Name must be at least 3 characters or at most 20 characters",
    minLength: "Password must be at least 8 characters long",
    uppercase: "Password must contain at least one uppercase letter",
    lowercase: "Password must contain at least one lowercase letter",
    number: "Password must contain at least one number",
    specialChar: "Password must contain at least one special character",
    password: "Password must be 8+ chars with uppercase, lowercase, number & special character.",
    email: "Email is required",
    address: "Address is required",
    phone: "Phone number is required",
    confirmPass: "Confirm Password is required",
    terms: "You must accept the terms and conditions",
};

export const signUpSchema = z
    .object({
        firstName: z
            .string()
            .min(3, authWarningMessage.firstName)
            .max(20, authWarningMessage.firstName),
        lastName: z
            .string()
            .min(3, authWarningMessage.lastName)
            .max(20, authWarningMessage.lastName),
        email: z.string().email(authWarningMessage.email),
        phone: z.string().min(10, authWarningMessage.phone),
        password: z
            .string()
            .min(8, authWarningMessage.minLength)
            .regex(/[A-Z]/, authWarningMessage.uppercase)
            .regex(/[a-z]/, authWarningMessage.lowercase)
            .regex(/[0-9]/, authWarningMessage.number)
            .regex(/[^a-zA-Z0-9]/, authWarningMessage.specialChar),
        confirmPassword: z
            .string()
            .min(8, authWarningMessage.minLength)
            .regex(/[A-Z]/, authWarningMessage.uppercase)
            .regex(/[a-z]/, authWarningMessage.lowercase)
            .regex(/[0-9]/, authWarningMessage.number)
            .regex(/[^a-zA-Z0-9]/, authWarningMessage.specialChar),
        address: z.string().min(1, authWarningMessage.address),
        terms: z.boolean().refine((val) => val === true, {
            message: authWarningMessage.terms,
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: authWarningMessage.confirmPass,
    });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type SignUpFormErrors = Partial<Record<keyof SignUpFormValues, string>>;


// State interface for auth set form
interface AuthState {
    signupFormFields: SignUpFormValues;
    signupFormErrors: SignUpFormErrors;
    setSignupFormFields: (fields: SignUpFormValues) => void;
    setSignupFormErrors: (fields: SignUpFormErrors) => void;
    resetForm: () => void;
    // buttonText: string;
    // setButtonText: (text: string) => void;
}

const initialSignUpData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    terms: false,
}

const initialSignUpErrors = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    terms: "",
}
// Create Zustand store for auth management
export const signupSetStore = create<AuthState>((set) => ({
    signupFormFields: initialSignUpData,
    signupFormErrors: initialSignUpErrors,
    setSignupFormFields: (fields) => set((state) => ({ signupFormFields: { ...state.signupFormFields, ...fields } })),
    setSignupFormErrors: (fields) => set((state) => ({ signupFormErrors: { ...state.signupFormErrors, ...fields } })),
    resetForm: () => set({ signupFormFields: initialSignUpData, signupFormErrors: initialSignUpErrors }),
}));



export default signupSetStore;