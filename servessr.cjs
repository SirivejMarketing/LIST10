const polka = require("polka");
const dotenv = require("dotenv");
dotenv.config();
const app = polka();
import("./bootstrap/ssr/ssr.js")
    .then(({ handler }) => {
        if (typeof handler === "function") {
            app.use(handler);
            console.log(
                "Inertia SSR handler successfully loaded and attached."
            );
        } else {
            console.error("Imported handler is not a function:", handler);
        }
    })
    .catch((err) => {
        console.error("Failed to import handler:", err);
        process.exit(1);
    });
app.get("/healthcheck", (req, res) => {
    res.end("ok");
});
