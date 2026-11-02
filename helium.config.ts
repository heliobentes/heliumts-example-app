import type { HeliumConfig } from "heliumts/server";

const config: HeliumConfig = {
    // Keep 0 for a direct connection. Set this to the exact number of trusted
    // reverse proxies in production; those proxies must sanitize forwarded headers.
    trustProxyDepth: Number(process.env.TRUST_PROXY_DEPTH || 0),
    rpc: {
        maxBodySize: 1_048_576,
        maxBatchSize: 20,
        // Omitted security settings use Helium's per-IP request limits.
    },
};

export default config;
