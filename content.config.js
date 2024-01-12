import { defineConfig } from "vite";

export default defineConfig({
    esbuild: {
        jsxFactory: "h",
    },
    build: {
        rollupOptions: {
            input: {
                main: "src/content.ts",
            },
            output: {
                dir: "content_dist",
            },
        },
    },
});
