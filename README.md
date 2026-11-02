# HeliumTS Example App

A React + Vite application using [HeliumTS](https://github.com/heliobentes/heliumts) 0.9.6. It demonstrates file-based routes, route groups and layouts, typed RPC, HTTP handlers, static generation, server-side rendering, background workers, Tailwind CSS, and Google sign-in with Better Auth.

## Requirements

- Node.js 20.19+ on the Node 20 line, or Node.js 22.12+.
- MongoDB for sign-in and the task/profile examples. The public pages and server-rendered example do not query the database.
- Google OAuth credentials for sign-in.

## Run locally

```sh
npm ci
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set `MONGODB_URI`, `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET` in `.env` before using sign-in. Use a distinct random secret of at least 32 characters for Better Auth. Register `http://localhost:3000/api/auth/callback/google` as the Google OAuth callback URL.

The existing auth configuration disables new Google account registration with `disableSignUp: true`. Provision an account first or explicitly enable registration in `src/libs/better-auth/auth.ts` for your development database.

Only variables beginning with `HELIUM_PUBLIC_` are exposed directly to browser code. The environment RPC example returns public values and boolean configuration checks; it does not return database URLs or secrets.

## Examples

| Route | Demonstrates |
| --- | --- |
| `/` and `/about/us` | Static HTML generated during the build with `"use ssg"` |
| `/server-rendered?greeting=Hello` | Request-time HTML with `"use ssr"` and props from `server-rendered.server.ts`; query props also update during client navigation |
| `/login` | Google sign-in through the multi-segment `/api/auth/**` HTTP handler |
| `/dashboard` | Typed RPC queries, public environment values, and client IP detection |
| `/tasks` and `/tasks/:id` | Queries, mutations, and automatic cache invalidation |
| `/tasks/test-rpc-vs-http` | A small read-only transport comparison; larger runs can hit the configured request limits |
| `/settings/profile` | Profile reads and updates |

`src/server/_middleware.ts` checks a Better Auth session before protected RPC methods and `/api/get-tasks` execute. Client layout redirects provide the interface behavior; server middleware enforces access. New RPC methods require a session unless explicitly listed as public. The framework's public metadata method remains available for route metadata updates.

This is a shared-data demo: all signed-in users use the same task collection and single profile. Add user ownership checks and database query scoping before adapting it for private user data. The sample webhook handlers also need provider signature validation before production use.

The background worker returns a cleanup function so its timer stops when Helium shuts down.

## Validate and build

```sh
npm run typecheck
npm run build
npm start
```

The build regenerates `src/types/heliumts-server.d.ts`, bundles the browser and server, and creates static page HTML. Commit the generated method declarations when server exports change. `npm run lint` checks application source.

## Deploy

Use a persistent Node.js service with WebSocket upgrade support. Run `npm ci`, `npm run build`, and `npm start`; Helium serves the app and RPC endpoints together. `PORT` defaults to 3000. Set the production database URL, OAuth credentials, `BETTER_AUTH_URL`, `BETTER_AUTH_SECRET`, and a separate random `HELIUM_SECRET` in the service environment. Update the Google OAuth callback URL to the production origin.

`TRUST_PROXY_DEPTH` defaults to `0` for direct connections. Set it to the exact number of trusted reverse proxies and make those proxies sanitize forwarded headers. Helium uses that setting for client IP extraction and the protocol passed to the auth handler. Keep Helium's default connection and request limits enabled; tune them for your deployment if needed.

This repository does not contain provider-specific deployment configuration. A static-only host cannot run its authentication, database, RPC, or worker features.
