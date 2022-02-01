const express = require("express");
const {
  createPin,
  getAllPin,
  getPinDetail,
  getAdminPin,
  updatePin,
  deletePin,
} = require("../controllers/pinController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/pins").get(getAllPin);
router.route("/pin/:id").get(getPinDetail);
router
  .route("/admin/pins")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminPin);
router
  .route("/admin/pin/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createPin);
router
  .route("/admin/pin/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updatePin)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deletePin);

module.exports = router;
