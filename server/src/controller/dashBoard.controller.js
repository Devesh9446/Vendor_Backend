import {apiResponse} from '../utils/apiResponse.js'
import {apiError} from '../utils/apiError.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import {dashBoardModel} from '../models/dashBoard.models.js'

const dashBoardModify=asyncHandler(async(req,res)=>{
    const{priority,status}=req.body;
    const data={
        priority,
        status,
    }
    
})

const dashBoardFetch=asyncHandler(async(req,res)=>{
    const {email}=req.params;
    if(!email.trim()){
        throw new apiError(400,"Email is required")
    }
    
})

export {
    dashBoardModify,
    dashBoardFetch,
}  