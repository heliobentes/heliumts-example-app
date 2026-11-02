import type { HeliumConfig } from "heliumts/server";

const config: HeliumConfig = {
    // Keep 0 for a direct connection. Set this to the exact number of trusted
    // reverse proxies in production; those proxies must sanitize forwarded headers.
    trustProxyDepth: Number(process.env.TRUST_PROXY_DEPTH || 0),
    rpc: {
        transport: "auto", // "websocket", "http", or "auto"
        autoHttpOnMobile: true,
        compression: {
            enabled: true,
            threshold: 1024,
        },
        // Omitted security settings use Helium's connection and request limits.
    },
};

export default config;
