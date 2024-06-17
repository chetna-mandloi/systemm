var express = require('express');
var router = express.Router();
const {isLoggedIn} = require("../utility/auth")
const PropertysSchema = require("../models/propertySchema");
const upload = require('../utility/multer');


function verifyrole(req,res,next){
    if(req.user.role == "seller"){
        next ();
    } else{
        res.send("only seller the primission to create property");
    }
}

router.post("/",isLoggedIn, upload.single("image"), async function(req,res,next){
    try{
        const newproperty = new PropertysSchema({...req.body,image: req.file.filename, owner: req.user._id,

        });
        // res.send(newproperty);
        await newproperty.save();

        res.send("property Created!")
     }catch(error){
        res.send(error.message)
    }
});

module.exports = router;