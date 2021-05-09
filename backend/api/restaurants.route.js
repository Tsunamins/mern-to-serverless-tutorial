import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js" //created next

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants) //created next

export default router