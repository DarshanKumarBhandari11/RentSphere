const User = require("../models/user.js");

module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signUpUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });

        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to RentSphere !");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.renderLogInForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.logInUser = async (req, res) => {
    req.flash("success", "Welcome Back !");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logOutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Bye Bye !  See you soon.");
        res.redirect("/home");
    });
};