const mongoose = require("mongoose");
mongoose.pluralize(null);

const cartoonSchema = mongoose.Schema( {
    name: String,
    author: String,
    producer : String,
    channel: String
});

const cartoonModel = mongoose.model("Cartoon",cartoonSchema);

module.exports= cartoonModel;