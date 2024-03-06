import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { rfq } from "../models/rfq.models.js";

const rfqFetch = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  console.log(supplierUser);
  if (!supplierUser) {
    throw new apiError(400, "Supplier User required");
  }
  try{
    const data = await rfq.find({supplierUser:supplierUser});
    if (!data) {
      res.json(400).json(new apiResponse(400, {}, "No data found"));
    }
    res.status(200).json(new apiResponse(200, data, "data send successfully"));
  }catch(error){
    throw new apiError(400,`Error:${error}`);
  }
});

const rfqModify = asyncHandler(async (req, res) => { 
  const { supplierUser } = req.params;
  const { status,customer,code,purchaser } = req.body;

  if (!supplierUser) {
    throw new apiError(400, "Supplier User is required");
  }
  if(!code){
    throw new apiError(400, "code is required");
  }
  if(!purchaser){
    throw new apiError(400, "purchaser is required");
  }
  if (!status) {
    throw new apiError(400, "status is required");
  }
  try{
    console.log(status);
    console.log(code);
    console.log(purchaser)
    const fetch=await rfq.find({
      supplierUser:supplierUser, 
        code:code,
        purchaser:purchaser,
        customer:customer
    })
    console.log(fetch);
    const data =await rfq.updateMany(
      {
        supplierUser:supplierUser,
        code:code,
        purchaser:purchaser,
        customer:customer
      },
      {
        $set: {
          status: status,
        },
      },
      {
        new: true, 
      }
    );
    res.status(200).json(new apiResponse(200, data, "data changed successfully"));
  }catch(error){
    throw new apiError(400,`Error:error`)
  }
});

export { rfqFetch, rfqModify };
 