const polka = require("polka");
const dotenv = require("dotenv");
dotenv.config();
const app = polka();
const port = process.env.PORT ?? 3000;
app.listen(port, () => {
    console.log(
        `Server started on port ${
            port === "passenger" ? "Phusion Passenger" : port
        }`
    );
});
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
