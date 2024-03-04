import mongoose from "mongoose"

const pendingActionSchema = new mongoose.Schema({
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
    date:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["invoice-pending","acceptance-pending"],
        default:"acceptance-pending"
    },
    supplierUser:{
        type:String,
    }
},{timestamps:true})

export const pendingAction = mongoose.model("pendingAction",pendingActionSchema);


  
