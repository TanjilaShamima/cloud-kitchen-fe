import { ZodSchema, ZodError } from "zod";
type FormErrors<T> = Partial<Record<keyof T, string>>;

export const validateForm = <T>(
    schema: ZodSchema<T>,
    formData: T
): { validationErrors: FormErrors<T>; hasError: boolean } => {
    try {
        schema.parse(formData);
        return { validationErrors: {}, hasError: false };
    } catch (err) {
        if (err instanceof ZodError) {
            const validationErrors = err.errors.reduce((acc, error) => {
                acc[error.path[0] as keyof T] = error.message;
                return acc;
            }, {} as FormErrors<T>);
            return { validationErrors, hasError: true };
        }
        console.log(
            "unknown error occurred in zod form validation, check validateForm utils"
        );
        return { validationErrors: {}, hasError: true };
    }
};