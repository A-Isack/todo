import express, {Request, Response} from "express";
import {User}  from "../../models/users";
import {List}  from "../../models/list";
import { faker } from "@faker-js/faker";

const router  : express.Router = express.Router()

router.post(`/todo/new/:uid`, async(req : Request, res: Response)=>{
    const userId : String= req.params.uid
    const {todo, date} = req.body
    
    try {
        const userData = await User.findById(userId)

        if(!userData){res.send("user not found")}
        else{
            try{
                await List.create({userId: userId,date,todo})
                .then(data=>{res.json({result: "todo creared successfully",data})})
                .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})
            }
            catch{
                res.send("there was an unexpected error, please use valid parameters")
            }
        }

    } catch (error) {
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
            res.json({result: "todo updated successfully",data})
        }
        else{
            res.send("record not found")
        }
        })
        .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})

    } catch (error) {
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
            res.json({result: "todo removed successfully",data})
        }
        else{
            res.send("record not found")
        }
        })
        .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})

    } catch (error) {
        res.send("there was an unexpected error, please use a valid id")
    }

})

// The route is user to get all todos or a specific todo if the todo id is provided in the query string 
router.get(`/todo/:uid/`, async(req : Request, res: Response)=>{
    const  userId = req.params.uid
    try {
        req.query.todo ? 
        List.find({userId, _id: req.query.todo})
        .then(data=>{
            if(data){
                res.json({todo: data})
            }
            else{
                res.send("No records found")
            }
            })
        : List.find({userId})

        .then(data=>{
        if(data){
            res.json({todoList: data})
        }
        else{
            res.send("No records found")
        }
        })
        .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})

    } catch (error) {
        res.send("there was an unexpected error, please use a valid id")
    }

})

// the fifth function (get all)

router.get(`/todo/`, async(req : Request, res: Response)=>{

    try {
        List.find()
        .then(data=>{
            if(data){
                res.json({todo: data})
            }
            else{
                res.send("No records found")
            }
            })

        .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})

    } catch (error) {
        res.send("there was an unexpected error, please use a valid id")
    }

})

// seeds routes where recCount is the number of required fakes.
router.post("/todo/seeds/:userId/:recCount", async (req : Request, res: Response)=>{
    const userId : String= req.params.userId
    const count = parseInt(req.params.recCount) || 0

    type todos = {
        userId: String,
        date: Date,
        todo: String
    }
    
    const records: {
        userId: String,
        date: Date,
        todo: String
    }[] =[]
    
    for (let index = 0; index < count; index++) {
        
        const e : todos = {
            userId: "6581b0310c119ed079f27fc9",
            date: faker.date.future(),
            todo: faker.lorem.paragraph(2)
        }
        records.push(e)
    }
    
    try {
        const userData = await User.findById(userId)

        if(!userData){res.send("user not found")}
        else{
            try{
                await List.create(records)
                .then(data=>{res.json({result: "todos creared successfully",data})})
                .catch(err=>{res.send("there was an unexpected error, please use valid parameters")})
            }
            catch{
                res.send("there was an unexpected error, please use valid parameters")
            }
        }

    } catch (error) {
        res.send("there was an unexpected error, please use a valid userId")
    }

})

export const apiRoutes =  router
