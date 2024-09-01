// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/db/index";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
//   callbacks: {
//     signIn: async ({ user, account, profile }) => {
//         if (account?.provider === "google" && profile?.email) {
//           const existingUser = await prisma.user.findUnique({
//             where: { email: profile?.email },
//           });
//           if (!existingUser) {
//             return true;
//           }
//           // If we found a user, link the accounts
//           await prisma.account.create({
//             data: {
//               userId: existingUser.id,
//               type: account.type,
//               provider: account.provider,
//               providerAccountId: account.providerAccountId,
//               access_token: account.access_token,
//               expires_at: account.expires_at,
//               token_type: account.token_type,
//               scope: account.scope,
//               id_token: account.id_token,
//             },
//           });
//           return true;
//         }
//         return true;
//       },
//   },
// });


import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
 
export const { handlers: {GET, POST}, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          access_type: "offline",
          response_type: "code",
          prompt: "consent"
        }
      }
    })
  ],
  
})