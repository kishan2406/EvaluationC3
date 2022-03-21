const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (

    {

        body:{type: String, required: true}
    },{
        versionkey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user",userSchema);