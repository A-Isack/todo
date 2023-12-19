"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authenticate = () => {
    return (req, res, next) => {
        if (req.body.username === "ashraf_Isack" && req.body.secret === "1234") {
            next();
        }
        else {
            res.send("unauthorized access");
        }
    };
};
exports.authenticate = authenticate;
