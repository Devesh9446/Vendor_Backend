import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { catalogue } from "../models/catalogue.models.js";

const catalogueModify = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  const {customer , supplier ,currencies ,price ,customer_visibility,product,Uom} = req.body;

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
  if(!product){
    throw new apiError(400,"Product name is required");
  }
  if(!Uom){
    throw new apiError(400,"Uom is required");
  }

  try{
    const new_data=await catalogue.updateMany(
      {
        supplierUser:supplierUser,
        product:product,
        Uom:Uom,
      },
      {
        $set:{
          customer:customer,
          supplier:supplier,
          currencies:currencies,
          price:price||"",
          customer_visibility:customer_visibility, 
        }
      },
      { 
          new:true, 
      }
      )
      res.status(200).json(new apiResponse(200,new_data,"data changed successfully"))
  }catch(error){
    throw new apiError(`Error:${error}`);
  }
});

const catalogueFetch = asyncHandler(async (req, res) => {
  const { supplierUser } = req.params;
  if (!supplierUser) {
    throw new apiError(400, "Supplier User required");
  }
  try{
    const data = await catalogue.find({supplierUser:supplierUser});
    if (!data) {
      res.status(400).json(new apiResponse(400, {}, "No data found"));
    }
    res.status(200).json(new apiResponse(200, data, "data send successfully"));
  }catch(error){
    throw new apiError(400,`Error:${error}`);
  }
});

export { catalogueModify, catalogueFetch };

