import mongoose from "mongoose"

const rfq = new mongoose.Schema({
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
       date:{
        type:String,
        required:true,
       },
       deadline:{
        type:String,
        required:true,
       },
       status:{
        type:String,
        enum:["Converted","Quoted","Requoted","Regretted"],
        default:"Accepted",
        required:true,
       },
       supplierUser:{
        type:String,
       }
},{timestamps:true})

const catalogueModel = mongoose.model("user",rfq);
module.exports = {catalogueModel};