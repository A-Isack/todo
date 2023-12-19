import express, {Application, Request, Response, NextFunction} from "express";
import {connect} from "mongoose"

const app: Application = express()

connect("mongodb+srv://todoassignment:5b34u22f5jDKhHr4@atlascluster.h7g4rxq.mongodb.net/?retryWrites=true&w=majority")
.catch(ex=>{console.log(ex)})


let port = process.env.PORT || 3000
app.listen(port,()=>{
    console.table({status: "running", port})
})

