import "./resources/css/app.css";

import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";
// import typescript from "@rollup/plugin-typescript";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        svelte({
            preprocess: sveltePreprocess(),
            compilerOptions: {
                hydratable: true,
            },
        }),
        // typescript({
        //     tsconfig: "./tsconfig.json",
        // }),
    ],
});
