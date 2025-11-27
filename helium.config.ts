import type { HeliumConfig } from "helium/server";

const config: HeliumConfig = {
    // Proxy trust depth - set based on your deployment environment
    // 0 = local development (no proxies)
    // 1 = single proxy (Vercel, Netlify, Railway, etc.)
    // 2+ = multiple proxies (Cloudflare → Load Balancer → Server)
    trustProxyDepth: 1,

    rpc: {
        // Message encoding: "msgpack" (default, binary) or "json" (text, easier debugging)
        encoding: "msgpack",

        transport: "websocket", // or "auto" or "json"

        // Changes the transport for mobile devices to long-polling HTTP
        autoHttpOnMobile: true, // only applies if transport is "auto"

        // WebSocket per-message compression
        compression: {
            enabled: true,
            threshold: 1024, // Only compress messages larger than 1KB
        },

        // Rate limiting and connection security
        security: {
            maxConnectionsPerIP: 0, // 0 = unlimited (disable for dev)
            maxMessagesPerWindow: 0, // 0 = unlimited (disable for dev)
            rateLimitWindowMs: 10000,
            tokenValidityMs: 10000,
        },
    },
};

export default config;
