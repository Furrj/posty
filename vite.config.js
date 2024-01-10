// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "src/main.ts",
                content: "src/content.ts",
            },
            output: {
                chunkFileNames: "dist/[name].js",
            },
        },
    },
    resolve: {
        dedupe: ["dataHandlers.js"],
    },
});
