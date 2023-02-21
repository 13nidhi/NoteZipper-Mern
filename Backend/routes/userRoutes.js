const express = require("express");
const {registerUser, authUser, updateUserProfile} = require("../controllers/userControllers.js");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);


export default router;