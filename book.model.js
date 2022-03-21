const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (

    {

        like:{type: Number, default:0},
        coverImage: {type: String, required:1},
        content: {type: String,  required: false},
    },{
        versionkey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user",userSchema);