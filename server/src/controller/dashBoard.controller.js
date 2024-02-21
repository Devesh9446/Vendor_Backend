import { asyncHandler } from "../utils/asyncHandler";
import { apiError } from "../utils/apiError";
import { apiResponse } from "../utils/apiResponse";
import { dashboardModel } from "../models/dashBoard.models";

const dashboardCreate=asyncHandler(async(req,res)=>{
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
const dashboard=asyncHandler(async(req,res)=>{
    const {supplierUser,year} =req.param
    if(!supplierUser){
        throw new apiError(400,"suppier User is required");
    }
    if(!year){
        throw new apiError(400,"year is required");
    }
    const data=await dashboardModel.find({year:year,supplierUser:supplierUser})
    res.send(200).json(new apiResponse(200,data,"data send seuccessfully"))
})

export {dashboardCreate,dashboard}