import {apiResponse} from '../utils/apiResponse.js'
import {apiError} from '../utils/apiError.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import {pendingAction} from '../models/pendingAction.models.js'

const pendingActionModify=asyncHandler(async(req,res)=>{
    const {supplierUser} =req.params;
    const {priority,status,project,code}=req.body;
    if(!supplierUser){ 
        throw new apiError(400,"supplier user is required")
    }
    if(!priority){
        throw new apiError(400,"priority is required")
    }
    if(!status){
        throw new apiError(400,"status is required")
    }
    if(!project){
        throw new apiError(400,"Project is required");
    }
    if(!code){
        throw new apiError(400,"Code is required");
    }
    try{
        const data=await pendingAction.updateMany(
            {
                supplierUser:supplierUser,
                project:project,
                code:code,
            },
            {
                $set:{
                    priority:priority,
                    status:status,
                }
            },
            {
                new:true,
            }
        )
        res.status(200).json(new apiResponse(200,data,"data modified successfully"));
    }catch(error){
        throw new apiError(400,`Error:${error}`);
    }
})

const pendingActionFetch=asyncHandler(async(req,res)=>{
    const {supplierUser}=req.params;
    if(!supplierUser){
        throw new apiError(400,"supplier User is required");  
    }
    try{
        const data=await pendingAction.find({supplierUser:supplierUser});
        res.status(200).json(new apiResponse(200,data,"data send successfully"))
    }catch(error){
        throw new apiError(`Error:${error}`);
    }
})

export {
    pendingActionModify,
    pendingActionFetch,
}  