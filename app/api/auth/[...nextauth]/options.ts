import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'Username:', type: 'text', placeholder: 'Enter Username'
                },
                password: { 
                    label: "Password", type: "password", placeholder: "Hint: it's your password :)" 
                }
            },
            async authorize(credentials) {
                const user = {id: "admin", name: process.env.ADMIN_USER, password: process.env.ADMIN_PASS}
                if (
                    credentials?.username === user.name &&
                    credentials?.password === user.password
                ) {
                return user;
                }
                return null;
            },
        })
    ]
}