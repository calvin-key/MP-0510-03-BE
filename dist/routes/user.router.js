"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const fileFilter_1 = require("../lib/fileFilter");
const multer_1 = require("../lib/multer");
const jwt_1 = require("../lib/jwt");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.get("/referrals", jwt_1.verifyToken, user_controller_1.getReferredUsersController);
router.get("/referrals/by", jwt_1.verifyToken, user_controller_1.getReferredByController);
router.get("/profile", jwt_1.verifyToken, user_controller_1.getUserController);
<<<<<<< HEAD
=======
router.get('/organizers/:id', user_controller_1.getOrganizerController);
>>>>>>> main
router.patch("/", jwt_1.verifyToken, (0, multer_1.uploader)(1).fields([{ name: "profilePicture", maxCount: 1 }]), fileFilter_1.fileFilter, user_controller_1.updateUserController);
router.patch("/change-password", jwt_1.verifyToken, user_validator_1.validateChangePassword, user_controller_1.changePasswordController);
exports.default = router;
