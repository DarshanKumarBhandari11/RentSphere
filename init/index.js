const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/rentsphere";

main().
    then(() => {
        console.log("Connected to DB");
    }).catch(err => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Review.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "679e66801d9ef5388f06a671"}));
    await Listing.insertMany(initData.data);
    console.log("Data has been initialized.");
}

initDB();