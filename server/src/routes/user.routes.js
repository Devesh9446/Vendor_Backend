import Router from 'express'
import { dashboardAdd } from '../controller/dashboard.controller.js';
import {dashboardFetch} from '../controller/dashboard.controller.js'                                                                                                                                       

const router=Router()

router.route("/dashboard/c/:supplierUser/:year").get(dashboardFetch);

export default router;  