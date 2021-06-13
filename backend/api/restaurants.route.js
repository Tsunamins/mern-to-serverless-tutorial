import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
//route for getting rest by id and all assoc reviews

router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById)
//route for populating list of avail cuisines to choose from
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines)

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview)

export default router