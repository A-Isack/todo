import express, {Request, Response, NextFunction} from "express";

export const authenticate = ()=>{
    return (req: Request,res: Response,next: NextFunction)=>{
        if(req.body.username === "ashraf_Isack" && req.body.secret === "1234"){
            next()
        }
        else{
            res.send("unauthorized access")
        }
    }
}