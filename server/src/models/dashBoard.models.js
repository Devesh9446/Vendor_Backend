import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true,    
    },
    project:{
        type:String,
        required:true,
    },
    priority:{
        type:String,
        enum:["High","Medium","Low"],
        default:"High"
    },
    totalAmount:{
        type:String,
        required:true,
    },
    data:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["invoice-pending","acceptance-pending"],
        default:"acceptance-pending"
    },
},{timestamps:true})

const dashBoardModel = mongoose.model("user",userSchema);
module.exports = {dashBoardModel};

  
