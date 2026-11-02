import { randomUUID } from "node:crypto";

import { fromNodeHeaders } from "better-auth/node";
import { middleware } from "heliumts/server";

import { auth } from "../libs/better-auth/auth";
import { connectToDatabase } from "./db/connection";

// Only these diagnostic methods are public. New RPC methods require a session
// by default so a client-side route guard cannot accidentally expose data.
const publicMethods = new Set(["getIP", "getServerEnv", "__helium_internal__.seoMetadata"]);

export default middleware(async (context, next) => {
    const requiresSession = (context.type === "method" && !publicMethods.has(context.methodName || "")) || (context.type === "http" && context.httpPath === "/api/get-tasks");

    if (requiresSession) {
        const headers = fromNodeHeaders(context.ctx.req.headers);
        headers.set("x-forwarded-for", context.ctx.req.ip);
        const session = await auth.api.getSession({ headers });
        if (!session) {
            // Helium rejects requests when middleware does not call next().
            return;
        }
        context.ctx.session = session;
        await connectToDatabase();
    }

    context.ctx.requestTimestamp = new Date().toISOString();
    context.ctx.requestId = randomUUID();
    await next();
});
