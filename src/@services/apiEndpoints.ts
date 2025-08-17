/**
 * API Endpoints
 * 
 * This file contains the definitions of the API endpoints used in the application.
 * Each endpoint corresponds to a specific functionality in the backend.
 */


/*======================Auth========================== */

export const SIGN_UP_WITH_CREDENTIAL_API = "auth/register";
export const SIGN_IN_WITH_CREDENTIAL_API = "auth/login";
export const FORGOT_PASSWORD_API = "auth/forgot-password";
export const RESET_PASSWORD_API = "auth/reset-password";
export const VERIFY_EMAIL_API = "auth/verify-email";
export const LOG_IN_WITH_CREDENTIAL_API = "auth/login";
export const LOG_IN_WITH_GOOGLE_API = "auth/login-google";
export const GOOGLE_LOGIN_URL =
  `${process.env.NEXT_PUBLIC_API_URL}/auth/login-google`;




/*======================User========================== */
export const GET_USER_API = "users/me";