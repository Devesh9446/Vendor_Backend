import { apiResponse } from '../utils/apiResponse.js';
import { apiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { catalogueModel } from '../models/catalogue.models.js';

const catalogueModify = asyncHandler(async(req, res) => {
    const { price,customer_visibility } = req.body;

    const updatedCatalogue = await catalogueModel.update({ customer, supplier, currency, products });

    res.status(200).json(apiResponse(200, updatedCatalogue, 'Catalogue modified successfully'));
});

const catalogueFetch = asyncHandler(async(req, res) => {
    const { email } = req.params;
    if (!email.trim()) {
        throw new apiError(400, "Email is required");
    }

    const catalogue = await catalogueModel.findByEmail(email);

    if (!catalogue) {
        throw new apiError(404, "USER not found");
    }

    res.status(200).json(new apiResponse(200, catalogue ,'Catalogue fetched successfully'));
});


export {
    catalogueModify,
    catalogueFetch,
};
