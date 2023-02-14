"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const api_1 = __importDefault(require("./routes/api"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongo_1 = __importDefault(require("./models/mongo"));
const morgan_1 = __importDefault(require("morgan"));
(0, mongo_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
app.get("/", (req, res) => {
    return res.redirect(301, process.env.PRODUCTION_FRONTEND);
});
app.use("/api", api_1.default);
if (process.env.NODE_ENV === "local") {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}
exports.default = app;
