import { apiResponse } from '../utils/apiResponse.js';
import { apiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { catalogueModel } from '../models/catalogue.models.js';

const catalogueModify = asyncHandler(async(req, res) => {
    const { customer, supplier, currency, products } = req.body;
   

    // Add logic to modify catalogue data in the database
    const updatedCatalogue = await catalogueModel.update({ customer, supplier, currency, products });

    // Send response
    res.status(200).json(apiResponse(true, 'Catalogue modified successfully', updatedCatalogue));
});


const catalogueFetch = asyncHandler(async(req, res) => {
    const { email } = req.params;
    if (!email.trim()) {
        throw new apiError(400, "Email is required");
    }

    // Add logic to fetch catalogue data from the database
    const catalogue = await catalogueModel.findByEmail(email);

    if (!catalogue) {
        throw new apiError(404, "Catalogue not found");
    }

    // Send response
    res.status(200).json(apiResponse(true, 'Catalogue fetched successfully', catalogue));
});


export {
    catalogueModify,
    catalogueFetch,
};
