import { z } from "zod";
import { create } from "zustand";

// Define warning messages for login validation
export const loginWarningMessage = {
    email: "Email is required",
    password: "Password is required",
};

export const loginSchema = z.object({
    email: z.string().email(loginWarningMessage.email),
    password: z.string().min(1, loginWarningMessage.password),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type LoginFormErrors = Partial<Record<keyof LoginFormValues, string>>;

// State interface for login form
interface LoginState {
    loginFormFields: LoginFormValues;
    loginFormErrors: LoginFormErrors;
    setLoginFormFields: (fields: LoginFormValues) => void;
    setLoginFormErrors: (fields: LoginFormErrors) => void;
    resetForm: () => void;
}

const initialLoginData = {
    email: "",
    password: "",
};

const initialLoginErrors = {
    email: "",
    password: "",
};

// Create Zustand store for login management
export const loginSetStore = create<LoginState>((set) => ({
    loginFormFields: initialLoginData,
    loginFormErrors: initialLoginErrors,
    setLoginFormFields: (fields) =>
        set((state) => ({
            loginFormFields: { ...state.loginFormFields, ...fields },
        })),
    setLoginFormErrors: (fields) =>
        set((state) => ({
            loginFormErrors: { ...state.loginFormErrors, ...fields },
        })),
    resetForm: () =>
        set({
            loginFormFields: initialLoginData,
            loginFormErrors: initialLoginErrors,
        }),
}));

export default loginSetStore;