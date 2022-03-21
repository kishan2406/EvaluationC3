const express = require("express");

const {body, validatorResult} = require("express-validator");

const User = require("../model/user.model");

const router = express.Router();

router.post(
    "/",
    body("firstName")
    .trim()
    .not()
    .isEmail()
    .bail()
    .withMessage("First Name is required")
    .isLength({min:3,max:30})
    .withMessage("First Name must contain min 4 and max 30 characters"),


    body("age")
    .not()
    .isEmail()
    .withMessage("Age is required")
    .isNumeric()
    .withMessage("Age should be between 1 and 150")
    .custom((val)=>{
        if(val<1 || val>120){

        throw new Error("This is Incorrect age");
        }

        return true
       
    }),

    body("email")
    .isEmail()
    .custom(async(value)=>{

        const user = await User.findOne({email:value}); //User at line no.5
         
        if(user){

            throw new Error("This is used Email")
        }

        return true;  
    }),

      body("lastName")
      .custom((value)=>{

        if(value && value.length<3){

            throw new Error("LastName should conatain character between 3 to 30")
        }
        return true;
      })


      
)