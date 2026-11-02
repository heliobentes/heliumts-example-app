import { defineHTTPRequest } from "heliumts/server";

import { auth } from "../libs/better-auth/auth";

export const betterAuthHttp = defineHTTPRequest("ALL", "/api/auth/**", async (req, ctx) => {
    const request = await req.toWebRequest();
    // Better Auth uses this header for rate limits and session tracking. Replace
    // caller input with the IP Helium resolved using the configured proxy trust.
    request.headers.set("x-forwarded-for", ctx.req.ip);
    return auth.handler(request);
});
