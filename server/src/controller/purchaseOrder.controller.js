import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { purchaseOrder } from "../models/purchaseOrder.model.js"

const purchaseOrderFetch = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  if (!supplierUser) {
    throw new apiError(400, "Supplier User required");
  }
  const data = await purchaseOrder.find({supplierUser:supplierUser});
  if (!data) {
    res.status(400).json(new apiResponse(400, {}, "No data found"));
  }
  res.status(200).json(new apiResponse(200, data, "data send successfully"));

});

const purchaseOrderModify = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  const { status } = req.body;

  if (!supplierUser) {
    throw new apiError(400, "Supplier User is required");
  }
  if (!status) {
    throw new apiError(400, "");
  }
  const data =await purchaseOrder.findBysupplierUserAndUpdate(
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

});

export { purchaseOrderFetch, purchaseOrderModify };
