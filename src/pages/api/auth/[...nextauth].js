import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
//import Login from "../login";
import { useRouter } from "next/router";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log(`paass-${password}`);
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });

          const user = await res.json();
          console.log(user);
          console.log(`status - ${user.status}`);

          if (res.ok && user.status == true) {
            return user;
          } else if (res.ok && user.status == false) {
            throw new Error(`${user.message}`);
          } else return null;
        } catch (error) {
          console.log(error);
          throw new Error("Unauthorised user");
        }
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (user.status) {
        return true;
      }
      return null;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/Auth/Login",
  },
};
export default NextAuth(authOptions);
