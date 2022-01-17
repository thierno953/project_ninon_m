const express = require("express");
const {
  createHome,
  getAllHomes,
  getHomeDetails,
  deleteHome,
  getAdminHomes,
  updateHome,
} = require("../controllers/homeController");

const router = express.Router();

router.route("/homes").get(getAllHomes);
router.route("/home/:id").get(getHomeDetails);

router.route("/admin/homes").get(getAdminHomes);

router.route("/admin/home").post(createHome);

router.route("/admin/home/:id").put(updateHome).delete(deleteHome);

module.exports = router;
