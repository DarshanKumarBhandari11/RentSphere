const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

const router = express.Router();

// SignUp User Route, SignedUp User Route
router.route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signUpUser));

// LogIn User Route, LoggedIn User Route
router.route("/login")
    .get(userController.renderLogInForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), wrapAsync(userController.logInUser));

// LogOut User Route
router.get("/logout", userController.logOutUser);

module.exports = router;