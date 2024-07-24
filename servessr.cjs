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
    .then((module) => {
        console.log("Imported module:", module);
        if (typeof module.handler === "function") {
            app.use(module.handler);
        } else {
            console.error("Handler is not a function:", module.handler);
        }
    })
    .catch((err) => {
        console.error("Failed to import handler:", err);
        process.exit(1);
    });
app.get("/healthcheck", (req, res) => {
    res.end("ok");
});
