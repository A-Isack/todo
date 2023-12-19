"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const listSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    todo: { type: String, required: true }
});
const List = (0, mongoose_1.model)('List', listSchema);
module.exports = listSchema;
