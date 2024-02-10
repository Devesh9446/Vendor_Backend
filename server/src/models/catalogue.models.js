import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
    {   
        "Catalogue": {
          "customer": "string",
          "supplier": "string",
          "currency" : "string",
          "products": [
            {
              "name": "string",
              "price": "number",
              "uom": "string",
              "visibility": "string"
            }
          ]
        }
      }
)
const catalogueModel = mongoose.model("user",userSchema);
module.exports = catalogueModel;

  
