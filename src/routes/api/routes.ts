import express, {Application, Request, Response, NextFunction} from "express";
import {User}  from "../../models/users";
import {List}  from "../../models/list";

const router  : express.Router = express.Router()


router.post(`/todo/new/:uid`, async(req : Request, res: Response)=>{
    const userId : String= req.params.uid
    const {todo, date} = req.body
    console.log(req.body)
    
    try {
        const userData = await User.findById(userId)
        console.log(userData)

        if(!userData){res.send("user not found")}
        else{
            try{
                await List.create({userId: userId,date,todo})
                .then(data=>{console.log(data); res.json({result: "todo creared successfully",data})})
                .catch(err=>{res.send("there was an unexpected error, please use a valid parameters")})
            }
            catch{
                res.send("there was an unexpected error, please use a valid parameters")

            }
        }

    } catch (error) {
        console.log(error)
        res.send("there was an unexpected error, please use a valid userId")
    }

})

export const apiRoutes =  router
