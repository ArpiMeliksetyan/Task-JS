const mongoose = require("mongoose");

const gitSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    url: String,
    git_url: String,

});

const Data = mongoose.model("Data", gitSchema);

module.exports = Data ;