import Router from 'express'
import {dashBoardModify} from './controller/dashBoard.controller.js'
import {dashBoardFetch} from './controller/dashBoard.controller.js'
import {catalogueModify} from './controller/catalogue.controller.js'
import {catalogueFetch} from './controller/catalogue.controller.js'

const router=Router()

router.route("/dashboard/c:/email/").patch(dashBoardModify)
router.route("/dashboard/c:/email/").get(dashBoardFetch)
router.route("/catalogue").patch(catalogueModify)
router.route("/catalogue").get(catalogueFetch)

export default router;