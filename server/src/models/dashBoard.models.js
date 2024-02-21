import mongoose from 'mongoose'

const dashboardSchema= new mongoose.Schema({
    supplierUser:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    month:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    }
},{timeStamps:true});

export const dashboardModel = mongoose.model("dashboard",dashboardSchema);