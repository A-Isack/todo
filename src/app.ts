import express, {Application, Request, Response, NextFunction} from "express";
import {connect} from "mongoose"
import { apiRoutes } from "./routes/api/routes";
import bodyParser from "body-parser";

const app: Application = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api", apiRoutes)

// we should use process .env to store secrets by installing .env and requiring the .env congif 
//(after creating the .env file and adding it to giignore but i won't do it bcs this a temporary user).

connect("mongodb+srv://todoassignment:5b34u22f5jDKhHr4@atlascluster.h7g4rxq.mongodb.net/todo?retryWrites=true&w=majority")
.then(()=>{console.log(`connected successfully`)})
.catch(ex=>{console.log(ex)})



app.get(`*`, (req: Request,res: Response, next: NextFunction)=>{
    res.send("Incorrect route")
})

let port = process.env.PORT || 3000
app.listen(port,()=>{
    console.table({status: "running", port})
})

