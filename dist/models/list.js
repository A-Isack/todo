"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const mongoose_1 = require("mongoose");
const listSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    todo: { type: String, required: true }
});
exports.List = (0, mongoose_1.model)('List', listSchema);
