const express = require("express");
const {
  getAllAbouts,
  getAdminAbouts,
  createAbout,
  getAboutDetail,
} = require("../controllers/aboutController");

const router = express.Router();

router.route("/abouts").get(getAllAbouts);
router.route("/admin/abouts").get(getAdminAbouts);
router.route("/about").post(createAbout);
router.route("/about/:id").get(getAboutDetail);

module.exports = router;
