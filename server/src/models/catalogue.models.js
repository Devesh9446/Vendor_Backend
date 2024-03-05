import mongoose from "mongoose"

const CatalogueSchema = new mongoose.Schema({
    product:{
        type:String,
        required:true,
    },
    price:{
        type:String,
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
    supplierUser:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const catalogue = mongoose.model("catalogue",CatalogueSchema);