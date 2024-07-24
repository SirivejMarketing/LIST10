import { createInertiaApp } from "@inertiajs/svelte";
import createServer from "@inertiajs/svelte/server";

const pages = import.meta.glob("./Pages/**/*.svelte", { eager: true });

const render = createServer((page) =>
    createInertiaApp({
        page,
        resolve: (name) => {
            return pages[`./Pages/${name}.svelte`];
        },
    })
);

export function handler(req, res) {
    render(req, res, (err) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
    });
}
