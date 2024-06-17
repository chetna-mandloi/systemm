var express = require('express');
var router = express.Router();
const UserSchema = require('../models/userSchema');
const passport = require('passport');

const LocalStrategy = require("passport-local");
const { isLoggedIn } = require('../utility/auth');

passport.use(UserSchema.createStrategy());


/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.send('homepage');
})

router.post('/current', isLoggedIn, function(req, res, next) {
  res.send(req.user);
})

router.post("/register",async function(req,res,next){
  try{
    const {name,email,password,role} = req.body;
    const newuser = new UserSchema({name, email, role});
    await UserSchema.register(newuser,password);
    res.send("User Registered!");

  } catch(error){
    res.send(error.message);
  }
})
 router.post("/login",passport.authenticate("local"),function(req,res,next){
   res.send("user logged in");
 })

 router.get("/logout", function(req,res,next){
  req.logout(() => {
    res.send("user logged out");
  })
 })

module.exports = router;
