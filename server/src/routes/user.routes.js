import Router from 'express'
import {dashboardFetch} from '../controller/dashboard.controller.js'   
import { pendingActionFetch } from '../controller/pendingAction.controller.js';  
import { pendingActionModify } from '../controller/pendingAction.controller.js';  
import { purchaseOrderFetch } from '../controller/purchaseOrder.controller.js';
import { purchaseOrderModify } from '../controller/purchaseOrder.controller.js';
import { rfqFetch } from '../controller/rfq.controller.js';
import { rfqModify } from '../controller/rfq.controller.js';
import {catalogueFetch} from '../controller/catalogue.controller.js';
import {catalogueModify} from '../controller/catalogue.controller.js';

const router=Router()

router.route("/dashboard/c/:supplierUser/:year").get(dashboardFetch);

router.route("/pendingAction/c/:supplierUser").get(pendingActionFetch);
router.route("/pendingAction/c/:supplierUser").patch(pendingActionModify);

router.route("/purchaseOrder/c/:supplierUser").get(purchaseOrderFetch);
router.route("/purchaseOrder/c/:supplierUser").patch(purchaseOrderModify);

router.route("/rfq/c/:supplierUser").get(rfqFetch);
router.route("/rfq/c/:supplierUser").patch(rfqModify);
 
router.route("/catalogue/c/:supplierUser").get(catalogueFetch);
router.route("/catalogue/c/:supplierUser").patch(catalogueModify);
 
export default router;   