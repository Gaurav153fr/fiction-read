import { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";
import Github from "next-auth/providers/github";
import { createUser } from "./User/userController";

const authOptions: NextAuthOptions = {
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn(data) {
      console.log(data);
      if (data.user.name && data.user.email) {
        await createUser(data.user.name, data.user.email);
      }
      return true;
    },
  },
};

export default authOptions;
