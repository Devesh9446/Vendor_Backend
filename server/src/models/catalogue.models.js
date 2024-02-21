import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    product:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    Uom:{
        type:String,
        required:true,
    },
    customer_visibility:{
        type:String,
        required:true,
    },
    customer:{
        type:String,
        required:true,
    },
    supplier:{
        type:String,
        required:true,
    },
    currencies:{
        type:String,
        required:true,
    },
    supplier:{
        type:String,
    },
    supplierUser:{
        type:String,
    }
},{timestamps:true})

export const catalogueModel = mongoose.model("user",userSchema);