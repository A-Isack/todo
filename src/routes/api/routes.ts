import express, {Application, Request, Response, NextFunction} from "express";
import {User}  from "../../models/users";
import {List}  from "../../models/list";

const router  : express.Router = express.Router()

router.post(`/todo/new/:uid`, async(req : Request, res: Response)=>{
    const userId : String= req.params.uid
    const {todo, date} = req.body
    
    try {
        const userData = await User.findById(userId)
        console.log(userData)

        if(!userData){res.send("user not found")}
        else{
            try{
                await List.create({userId: userId,date,todo})
                .then(data=>{console.log(data); res.json({result: "todo creared successfully",data})})
                .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})
            }
            catch{
                res.send("there was an unexpected error, please use valid parameters")
            }
        }

    } catch (error) {
        console.log(error)
        res.send("there was an unexpected error, please use a valid userId")
    }

})

// we can also use PUT or patch req type 
router.post(`/todo/update/:recId`, async(req : Request, res: Response)=>{
    const recId : String= req.params.recId
    const {todo, date} = req.body

    try {
        List.findByIdAndUpdate({_id: recId},{todo, date},{new: true})
        .then(data=>{
        if(data){
            console.log(data); 
            res.json({result: "todo updated successfully",data})
        }
        else{
            res.send("record not found")
        }
        })
        .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})

    } catch (error) {
        console.log(error)
        res.send("there was an unexpected error, please use a valid id")
    }

})

// we can also use DELETE or patch req type 
router.post(`/todo/delete/:recId`, async(req : Request, res: Response)=>{
    const recId : String= req.params.recId

    try {
        List.findOneAndDelete({_id: recId})
        .then(data=>{
        if(data){
            console.log(data); 
            res.json({result: "todo removed successfully",data})
        }
        else{
            res.send("record not found")
        }
        })
        .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})

    } catch (error) {
        console.log(error)
        res.send("there was an unexpected error, please use a valid id")
    }

})

// The route is user to get all todos or a specific todo if the todo id is provided in the query string 
router.get(`/todo/:uid/`, async(req : Request, res: Response)=>{
    const  userId = req.params.uid

    console.log(req.query)
    try {
        req.query.todo ? 
        List.find({userId, _id: req.query.todo})
        .then(data=>{
            if(data){
                console.log(data); 
                res.json({todo: data})
            }
            else{
                res.send("No records found")
            }
            })
        : List.find({userId})

        .then(data=>{
        if(data){
            console.log(data); 
            res.json({todoList: data})
        }
        else{
            res.send("No records found")
        }
        })
        .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})

    } catch (error) {
        console.log(error)
        res.send("there was an unexpected error, please use a valid id")
    }

})

export const apiRoutes =  router
