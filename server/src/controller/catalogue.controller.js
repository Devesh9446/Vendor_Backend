import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { catalogueModel } from "../models/catalogue.models.js";

const catalogueModify = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  const {customer , supplier ,currencies ,price ,customer_visibility} = req.body;

  if(!supplierUser){
    throw new apiError(400,"Supplier User is required")
  }
  if(!customer){
    throw new apiError(400,"Customer is required");
  }
  if(!supplier){
    throw new apiError(400,"supplier is required");
  }
  if(!currencies){
    throw new apiError(400,"currencies is required");
  }
  if(!customer_visibility){
    throw new apiError(400,"customer visibility is required");
  }
  const new_data=await catalogueModel.findBysupplierUser(
    supplierUser,
    {
        customer:customer,
        supplier:supplier,
        currencies:currencies,
        price:price||"",
        customer_visibility:customer_visibility,
    },
    {
        new:true,
    }
    )
    res.json(200).json(new apiResponse(200,new_data,"data changed successfully"))
});

const catalogue = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  if (!supplierUser) {
    throw new apiError(400, "Supplier User required");
  }
  const data = await catalogueModel.findBysupplierUser(supplierUser);
  if (!data) {
    res.json(400).json(new apiResponse(400, {}, "No data found"));
  }
  res.json(200).json(new apiResponse(200, data, "data send successfully"));
});

export { catalogueModify, catalogue };
