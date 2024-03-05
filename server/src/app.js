import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
 
const app=express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

import dashBoardRoutes from './routes/user.routes.js'
app.use("/api/v1/users",dashBoardRoutes)

export {app};