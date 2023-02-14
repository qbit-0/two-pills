"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoose = () => __awaiter(void 0, void 0, void 0, function* () {
    if (process.env.NODE_ENV === "local") {
        console.log("Connecting to local mongodb.");
        yield mongoose_1.default.connect(process.env.LOCAL_MONGO_DB);
        console.log("Connected to local mongodb.");
    }
    else if (process.env.NODE_ENV === "production") {
        console.log("Connecting to production mongodb.");
        yield mongoose_1.default.connect(process.env.PRODUCTION_MONGO_DB);
        console.log("Connected to production mongodb.");
    }
    else {
        throw new Error(`Invalid NODE_ENV, ${process.env.NODE_ENV}`);
    }
});
exports.default = connectMongoose;
