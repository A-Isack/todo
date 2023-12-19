"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get(`/`, (req, res, next) => {
    const add = (a, b) => a + b;
    let message = `Hello there `;
    res.send(message);
    console.log(add(1, 2));
    next(`Some user used our API...next`);
}, (message) => {
    console.log(message);
});
app.listen(5000, () => {
    console.log(`app running on 5000`);
});
