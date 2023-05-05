const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session({
  secret: 'ThisisaSecretKey.',
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
connectToDB().catch(err => console.log(err));
async function connectToDB() {
    db = await mongoose.connect('mongodb://127.0.0.1:27017/userDB');
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

const userSchema = new mongoose.Schema({
  username: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);


// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Home page get method
app.get("/", function(req, res){
  res.render("home");

})
app.get("/login", function(req, res){
  res.render("login");

})
app.get("/register", function(req, res){
  res.render("register");

})
app.get("/secrets", function(req, res){
  if(req.isAuthenticated()){
    res.render("secrets");
  }
  else{
    res.redirect("/login");
  }

})

app.post("/register", async function(req, res){
  User.register({username: req.body.username, active: false}, req.body.password, async function(err, user) {
    if (err) { 
      console.log(err);
      res.redirect("/register");
     }
    passport.authenticate("local")(req, res,  function() {
        res.redirect("/secrets");

  
    });
  });   
  });
  app.post("/login", async function(req, res){
    const user = new User({
      username: req.body.username,
      password :req.body.password
    })
  
  try{
    req.logIn(user, async function(err){
      if(err){
        console.log(err);
      }
      else{
        passport.authenticate("local")(req, res,  function() {
          res.redirect("/secrets");
  
    
      });
      }
    })
  }
  catch(e){
    console.log(e);
  }
  
  })

  app.get('/logout', function(req, res){
    req.logout(function(err) {
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });





app.listen(3000, function() {
  console.log("Server started on port 3000");
});

