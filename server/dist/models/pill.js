"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pillSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.pillSchema = new mongoose_1.default.Schema({
    pillId: {
        type: Number,
        unique: true,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    pickCount: {
        type: Number,
        required: true,
    },
    replaceCount: {
        type: Number,
        required: true,
    },
});
const Pill = mongoose_1.default.model("Pill", exports.pillSchema);
exports.default = Pill;
