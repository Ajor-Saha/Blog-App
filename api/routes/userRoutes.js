const express = require('express');
const { registerUser, loginUser, updateProfile, userProfile, updateProfilePicture } = require('../controllers/userControllers');
const { authGuard } = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture);

module.exports = router;
