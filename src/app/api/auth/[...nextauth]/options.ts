import { authService } from "@/@services/authServices";
import { profileService } from "@/@services/profileServices";
import { UserType } from "@/@types/user";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      id: "email-sign-in",
      name: "Credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          const payload = {
            email: credentials.email,
            password: credentials.password,
          };
          const { data: user, error } = await authService.loginWithCredential(payload);
          if (error) {
            return null;
          }
          return user;
        }
        return null;
      },
    }),
    CredentialsProvider({
      id: "google-sign-in",
      name: "GoogleCredentials",
      credentials: {
        code: { type: "text" },
      },
      async authorize(credentials) {
        if (credentials) {
          const payload = {
            code: credentials.code,
          };
          const { data: user, error } = await authService.loginWithGoogle(payload);
          if (error) {
            return null;
          }
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        token.expValue = Date.now() + 3600 * 1000;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (Date.now() < (token as any).expValue) {
        return { ...token, ...user };
      } else {
        return { ...token, ...user };
        // when refresh token api will available it will be integrated
        // const refreshedToken = await refreshAccessToken(token.refresh_token as string);
        // refreshedToken.expValue = Date.now() + 3600 * 1000;
        // return { ...token, ...refreshedToken, ...user };
      }
    },

    async session({ session, token }) {
      console.log("token-user", token);
      const updatedToken = {
        ...token,
        ...(token.user as object),
      };
      delete updatedToken.user;
      session.user = updatedToken as unknown as UserType;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};