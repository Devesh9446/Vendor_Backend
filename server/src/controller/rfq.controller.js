import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { rfq } from "../models/rfq.models.js";

const rfqFetch = asyncHandler(async (req, res) => {
  console.log(req.params);
  const { supplierUser } = req.params;
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
  const { status } = req.body;

  if (!supplierUser) {
    throw new apiError(400, "Supplier User is required");
  }
  if (!status) {
    throw new apiError(400, "status is required");
  }
  try{
    const data =await rfq.findBysupplierUserAndUpdate(
      supplierUser,
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
