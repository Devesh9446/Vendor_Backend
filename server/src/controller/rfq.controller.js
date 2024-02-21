import { apiError } from "../utils/apiError";
import { apiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { rfqModel } from "../models/RFQ.models";

const purchaseOrder = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  if (!supplierUser) {
    throw new apiError(400, "Supplier User required");
  }
  const data = await rfqModel.findBysupplierUser(supplierUser);
  if (!data) {
    res.json(400).json(new apiResponse(400, {}, "No data found"));
  }
  res.json(200).json(new apiResponse(200, data, "data send successfully"));
});

const purchaseOrderModify = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  const { status } = req.body;

  if (!supplierUser) {
    throw new apiError(400, "Supplier User is required");
  }
  if (!status) {
    throw new apiError(400, "status is required");
  }
  const data =await rfqModel.findBysupplierUserAndUpdate(
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

export { purchaseOrder, purchaseOrderModify };
