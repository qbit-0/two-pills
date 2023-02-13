"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const api_1 = __importDefault(require("@/routes/api"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongo_1 = __importDefault(require("@/models/mongo"));
(0, mongo_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.all("/", (req, res, next) => {
    console.log(req.url, req.params, req.query, req.body);
    next();
});
app.get("/", (req, res) => {
    return res.send("<h1>Backend for Two Pills App</h1>");
});
app.use("/api", api_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
