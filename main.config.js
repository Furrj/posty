import { defineConfig } from "vite";

export default defineConfig({
    esbuild: {
        jsxFactory: "h",
    },
    build: {
        rollupOptions: {
            input: {
                main: "src/main.tsx",
            },
            output: {
                dir: "main_dist",
            },
        },
    },
});
