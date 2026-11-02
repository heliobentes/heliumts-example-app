import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();
export const auth = betterAuth({
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client,
    }),
    advanced: {
        database: {
            joins: true,
        },
    },
    // Ensure the session cookie cache uses JWT strategy so the server decodes session_data
    // tokens that contain '.' (typical of JWTs). This matches the cookie format we see
    // coming from the client / provider flows and prevents base64 decoding errors.
    // Disable the cookie cache so server always validates session state against
    // the database. This prevents the server from returning a stale session
    // when the DB session was manually deleted or revoked elsewhere.
    session: {
        cookieCache: {
            enabled: false,
            strategy: "jwt",
            maxAge: 300,
        },
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            disableSignUp: true, // Disable this if you want to allow new users to sign up with Google
        },
    },
});
