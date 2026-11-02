import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import heliumts from "heliumts/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react(), heliumts(), tailwindcss()],
    server: {
        port: 3000,
    },
});
