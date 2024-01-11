import { defineConfig } from "vite";

export default defineConfig({
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
