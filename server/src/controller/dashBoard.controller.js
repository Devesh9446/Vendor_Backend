import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { dashboard } from "../models/dashBoard.models.js";

const dashboardAdd=asyncHandler(async(req,res)=>{
    const {supplierUser} =req.param
    const {year, month ,price}=req.body
    if(!supplierUser){
        throw new apiError(400,"suppier User is required");
    }
    if(!year){
        throw new apiError(400,"year is required");
    }
    if(!month){
        throw new apiError(400,"month is required"); 
    }
    if(!price){
        throw new apiError(400,"price is required");
    }
    const data=[{
        supplierUser:supplierUser,
        year:year,
        month:month,
        price:price,
    }]
    const new_data=await dashboardModel.create(data);
    res.status(200).json(new apiResponse(200,new_data,"data saved successfully"))
});

const dashboardFetch=asyncHandler(async(req,res)=>{
    const {supplierUser,year} =req.params
    if(!supplierUser){
        throw new apiError(400,"suppier User is required");
    }
    if(!year){
        throw new apiError(400,"year is required"); 
    }
    try{
        const data=await dashboard.find({year:year,supplierUser:supplierUser})
        res.status(200).json(new apiResponse(200,data,"data send seuccessfully"))
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

export {dashboardAdd,dashboardFetch} 