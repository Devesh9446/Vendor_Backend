import {app} from './app.js'
import dotenv from 'dotenv'
import {connectDB} from './db/index.js'

dotenv.config({
    path:'./.env'
})
  
const PORT=process.env.PORT||8000;

connectDB().then(()=>{
    app.on("error",()=>{
        console.log("App connection failed:",error)
    }) 
    app.listen(PORT,()=>{
        console.log(`app is listning on PORT:${PORT}`)
    })
}).catch((error)=>{
    console.log("MONDODB CONNECTION FAILED",error)
})
