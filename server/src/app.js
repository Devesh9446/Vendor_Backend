import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors())

import dashBoardRoutes from './routes/vendors.js'
app.use("/api/v1/users",dashBoardRoutes)

export {app}