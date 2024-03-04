import mongoose from "mongoose"

const purchaseOrderSchema = new mongoose.Schema({
    code:{
        type:String,
        required:true,
       },
       customer:{
        type:String,
        required:true,
       },
       purchaser:{
        type:String, 
        required:true,
       },
       subject:{
        type:String,
        required:true,
       },
       poDate:{
        type:String,
        required:true,
       },
       value:{
        type:String,
        required:true,
       },
       status:{
        type:String,
        enum:["Accepted","Completed","In-progress","Released"],
        default:"Accepted",
        required:true,
       },
       inv:{
        type:String,
       },
       inw:{
        type:String,
       },
       supplierUser:{
        type:String,
       }
},{timestamps:true})

export const purchaseOrder = mongoose.model("purchaseOrder",purchaseOrderSchema);