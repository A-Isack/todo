"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const routes_1 = require("./routes/api/routes");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use("/api", routes_1.apiRoutes);
// we should use process .env to store secrets by installing .env and requiring the .env congif 
//(after creating the .env file and adding it to giignore but i won't do it bcs this a temporary user).
(0, mongoose_1.connect)("mongodb+srv://todoassignment:5b34u22f5jDKhHr4@atlascluster.h7g4rxq.mongodb.net/todo?retryWrites=true&w=majority")
    .then(() => { console.log(`connected successfully`); })
    .catch(ex => { console.log(ex); });
app.get(`*`, (req, res, next) => {
    res.send("Incorrect route");
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.table({ status: "running", port });
});
