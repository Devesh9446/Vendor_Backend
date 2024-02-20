import {apiResponse} from '../utils/apiResponse.js'
import {apiError} from '../utils/apiError.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import {dashBoardModel} from '../models/dashBoard.models.js'

const dashBoardModify=asyncHandler(async(req,res)=>{
    const{priority,status}=req.body;
    const {email}=req.param;
    if(!email.trim()){
        throw new apiError(400,"Email is required")
    }
    const user =dashBoardModel.findByEmailAndUpdate(
        email,
        {
            $set:{
                priority:priority,
                status:status
            }
        },
        {
            new:true,
        }  
    )
    if(!user){
        throw new apiError(400,"User Not Found")
    }
    res.status(200).json(new apiResponse(200,user,"Data Modified Successfully"))
})

const dashBoardFetch=asyncHandler(async(req,res)=>{
    const {email}=req.params;
    if(!email.trim()){
        throw new apiError(400,"Email is required")
    }
    const user= await dashBoardModel.findByEmail(email)
    if(!user)
    {
        throw new apiError(400,"User not found")
    }

    res.status(200).json(new apiResponse(200,user,"data send successfully"))

})

export {
    dashBoardModify,
    dashBoardFetch,
}  