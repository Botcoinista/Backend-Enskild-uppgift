const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    Name:        { type: String, required: true },
    Description: { type: String },
    Price:       { type: Number },
    ImgURL:      { type: String }
}, { timestamps: true }) 

module.exports = mongoose.model("product", productSchema)