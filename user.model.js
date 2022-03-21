const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (

    {

        firstName:{type: String, required: true, min:3, max:30},
        lastName: {type: String, required: false, min:3, max:30},
        age: {type: Number, required: true,min:1, max:150},
        email:{type: Number, required: true, unique: true},
        profileImages: {type: Number, required: true}
    },{
        versionkey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user",userSchema);