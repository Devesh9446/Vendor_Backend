import {apiResponse} from '../utils/apiResponse.js'
import {apiError} from '../utils/apiError.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import {pendingActionModel} from '../models/pendingAction.models.js'

const pendingActionModify=asyncHandler(async(req,res)=>{
    const {supplierUser} =req.param;
    const {priority,status}=req.body;
    if(!supplierUser){
        throw new apiError(400,"supplier user is required")
    }
    if(!priority){
        throw new apiError(400,"priority is required")
    }
    if(!status){
        throw new apiError(400,"status is required")
    }
    const data=await pendingActionModel.findBysupplierUserAndUpdate(
        supplierUser,
        {
            priority:priority,
            status:status,
        },
        {
            new:true,
        }
    )
    res.status(200).json(new apiResponse(200,data,"data modified successfully"));
})

const pendingAction=asyncHandler(async(req,res)=>{
    const {supplierUser}=req.param;
    if(!supplierUser){
        throw new apiError(400,"supplier User is required");
    }
    const data=await pendingActionModel.find({supplierUser:supplierUser});
    res.status(200).json(new apiResponse(200,data,"data send successfully"))
})

export {
    pendingActionModify,
    pendingAction,
}  