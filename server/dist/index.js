"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const routes_1 = __importDefault(require("@/routes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    return res.status(200).send("<h1>Hello world from backend!</h1>");
});
app.use("/api", routes_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
