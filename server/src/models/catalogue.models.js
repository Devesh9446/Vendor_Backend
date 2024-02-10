import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    
},{timestamps:true})

const catalogueModel = mongoose.model("user",userSchema);
module.exports = {catalogueModel};