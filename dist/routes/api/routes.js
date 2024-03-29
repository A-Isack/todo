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
exports.apiRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../../models/users");
const list_1 = require("../../models/list");
const router = express_1.default.Router();
router.post(`/todo/new/:uid`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.uid;
    const { todo, date } = req.body;
    try {
        const userData = yield users_1.User.findById(userId);
        if (!userData) {
            res.send("user not found");
        }
        else {
            try {
                yield list_1.List.create({ userId: userId, date, todo })
                    .then(data => { res.json({ result: "todo creared successfully", data }); })
                    .catch(err => { res.send("there was an unexpected error, please use valid parameters"); });
            }
            catch (_a) {
                res.send("there was an unexpected error, please use valid parameters");
            }
        }
    }
    catch (error) {
        res.send("there was an unexpected error, please use a valid userId");
    }
}));
// we can also use PUT or patch req type 
router.post(`/todo/update/:recId`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recId = req.params.recId;
    const { todo, date } = req.body;
    try {
        list_1.List.findByIdAndUpdate({ _id: recId }, { todo, date }, { new: true })
            .then(data => {
            if (data) {
                res.json({ result: "todo updated successfully", data });
            }
            else {
                res.send("record not found");
            }
        })
            .catch(err => { res.send("there was an unexpected error, please use valid parameters"); });
    }
    catch (error) {
        res.send("there was an unexpected error, please use a valid id");
    }
}));
// we can also use DELETE or patch req type 
router.post(`/todo/delete/:recId`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recId = req.params.recId;
    try {
        list_1.List.findOneAndDelete({ _id: recId })
            .then(data => {
            if (data) {
                res.json({ result: "todo removed successfully", data });
            }
            else {
                res.send("record not found");
            }
        })
            .catch(err => { res.send("there was an unexpected error, please use valid parameters"); });
    }
    catch (error) {
        res.send("there was an unexpected error, please use a valid id");
    }
}));
// The route is user to get all todos or a specific todo if the todo id is provided in the query string 
router.get(`/todo/:uid/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.uid;
    try {
        req.query.todo ?
            list_1.List.find({ userId, _id: req.query.todo })
                .then(data => {
                if (data) {
                    res.json({ todo: data });
                }
                else {
                    res.send("No records found");
                }
            })
            : list_1.List.find({ userId })
                .then(data => {
                if (data) {
                    res.json({ todoList: data });
                }
                else {
                    res.send("No records found");
                }
            })
                .catch(err => { res.send("there was an unexpected error, please use valid parameters"); });
    }
    catch (error) {
        res.send("there was an unexpected error, please use a valid id");
    }
}));
exports.apiRoutes = router;
