const express = require("express");
const profileController = require("../controllers/profileController");

const router = express.Router();

router.get(
  "/:id",
  // authController.protect,
  // authorizeMiddleware.authorize("Admin"),
  profileController.getProfile
);

router.post(
  "/",
  // authController.protect,
  // authorizeMiddleware.authorize("Admin"),
  profileController.createProfile
);

router.patch(
  "/:id",
  // authController.protect,
  // authorizeMiddleware.authorize("Admin"),
  profileController.updateProfile
);

router.delete(
  "/:id",
  // authController.protect,
  // authorizeMiddleware.authorize("Admin"),
  profileController.deleteProfile
);

module.exports = router;
