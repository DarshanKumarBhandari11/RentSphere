const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);
// Passport-Local Mongoose automatically adds a username, hash and salt field to store the username,
// the hashed password and the salt value.
// Hashing Algorithm: pbkdf2

const User = mongoose.model("User", userSchema);

module.exports = User;