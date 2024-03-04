import Router from 'express'
import {dashboardFetch} from '../controller/dashboard.controller.js'   
import { pendingActionFetch } from '../controller/pendingAction.controller.js';  
import { pendingActionModify } from '../controller/pendingAction.controller.js';  
import { purchaseOrderFetch } from '../controller/purchaseOrder.controller.js';
import { purchaseOrderModify } from '../controller/purchaseOrder.controller.js';

const router=Router()

router.route("/dashboard/c/:supplierUser/:year").get(dashboardFetch);

router.route("/pendingAction/c/:supplierUser").get(pendingActionFetch);
router.route("/pendingAction/c/:supplierUser").patch(pendingActionModify);

router.route("/purchaseOrder/c/:supplierUser").get(purchaseOrderFetch);
router.route("/purchaseOrder/c/:supplierUser").get(purchaseOrderModify);

export default router;  