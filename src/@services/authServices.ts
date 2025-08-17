import {
    FORGOT_PASSWORD_API,
    LOG_IN_WITH_CREDENTIAL_API,
    LOG_IN_WITH_GOOGLE_API,
    SIGN_UP_WITH_CREDENTIAL_API,
    VERIFY_EMAIL_API,
} from "./apiEndpoints";
import { postToAPI } from "./apiServices";


export const authService = {
    async loginWithCredential(payload: { email: string; password: string }) {
        return await postToAPI(LOG_IN_WITH_CREDENTIAL_API, payload, false);
    },
    // async loginWithMFA(payload: {
    //     session: string;
    //     code: string;
    //     user_id: string;
    // }) {
    //     return await postToAPI(LOG_IN_WITH_MFA, payload, false);
    // },
    async signupWithCredential(payload: {
        email: string;
        firstName: string;
        lastName: string;
        role: string;
        address: string;
        phone: string;
        password: string;
    }) {
        return await postToAPI(SIGN_UP_WITH_CREDENTIAL_API, payload, false);
    },
    async forgotPassword(payload: { email: string }) {
        return await postToAPI(FORGOT_PASSWORD_API, payload, false);
    },
    // async forgotPasswordConfirmation(payload: {
    //     code: string | null;
    //     email: string | null;
    //     password: string;
    // }) {
    //     return await postToAPI(FORGOT_PASSWORD_CONFIRMATION_API, payload, false);
    // },
    async verifyEmail(payload: {
        code: string | null;
        email: string | null;
        username: string | null;
    }) {
        return await postToAPI(VERIFY_EMAIL_API, payload, false);
    },

    async loginWithGoogle(payload: { code: string }) {
        return await postToAPI(LOG_IN_WITH_GOOGLE_API, payload, false);
    },
};

// export async function refreshAccessToken(refreshToken: string): Promise<JWT> {
//     const { data, error } = await postToAPI(
//         REFRESH_TOKEN_API,
//         {
//             refresh_token: refreshToken,
//         },
//         false
//     );
//     if (error) {
//         throw new Error(data);
//     }
//     return data;
// }