import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { purchaseOrder } from "../models/purchaseOrder.model.js"

const purchaseOrderFetch = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  if (!supplierUser) {
    throw new apiError(400, "Supplier User required");
  } 
  try{
    const data = await purchaseOrder.find({supplierUser:supplierUser});
    if (!data) {
      res.status(400).json(new apiResponse(400, {}, "No data found"));
    }
    res.status(200).json(new apiResponse(200, data, "data send successfully"));
  }catch(error){
    throw new apiError(`Error:${error}`);
  }
});

const purchaseOrderModify = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  const { status,code,customer,purchaser } = req.body;

  if (!supplierUser) {
    throw new apiError(400, "Supplier User is required");
  }
  if (!status) {
    throw new apiError(400, "status is required");
  }
  if(!code){
    throw new apiError(400, "code is required");
  }
  if(!customer){
    throw new apiError(400, "customer is required");
  }
  if(!purchaser){
    throw new apiError(400, "purchaser is required");
  }
  try{
    const data =await purchaseOrder.updateMany(
      {
        code:code,
        customer:customer,
        purchase:purchaser
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
    throw new apiError(400,`Error:${error}`);
  }
});

export { purchaseOrderFetch, purchaseOrderModify };
