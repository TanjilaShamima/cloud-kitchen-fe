import NextAuth from "next-auth";
import { UserType } from "./user";


declare module "next-auth" {
  interface Session {
    user: UserType;
  }

  interface User extends UserType {}
}

declare module "next-auth/jwt" {
  interface JWT extends UserType {
    expValue?: number;
  }
}
