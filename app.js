const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
var md5 = require('md5');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

connectToDB().catch(err => console.log(err));
async function connectToDB() {
    db = await mongoose.connect('mongodb://127.0.0.1:27017/userDB');
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
const User = new mongoose.model("User", userSchema);



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

app.post("/register", async function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: md5(req.body.password)
      });
      try{
        await newUser.save();
          console.log("new user added");
      
          res.render("secrets");
      }
      catch(e){
        console.log(e);

      }   
  
  });
  app.post("/login", async function(req, res){
    var email =  req.body.username;
    var password =   md5(req.body.password)
  try{
    var foundUser = await User.findOne({email: email},);
    if(foundUser){
        if(foundUser.password === password){
            console.log("login success");
            res.render("secrets");  
        }
        else{
            console.log("Password mismatch");
        }
    }
    else{
        console.log("user Not found"); 
    }
  }
  catch(e){
    console.log(e);
  }
  
  })







app.listen(3000, function() {
  console.log("Server started on port 3000");
});

