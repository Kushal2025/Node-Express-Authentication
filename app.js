const express = require("express");
const app = express();
const userModel = require("./models/user");
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { log } = require("console");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/create", (req, res) => {
  res.render("index");
});

app.post("/create",  (req, res) => {
  let { username, email, password, age } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async(err, hash) => {
        const user = await userModel.create({ username, email, password:hash, age });
        let token = jwt.sign({email},"shhhhhhhhhh");
        res.cookie("token",token);
  res.send(user);
      });
     
  });
 
});
app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/login',async (req,res)=>{
    // let {email,password}= req.body;
    let user = await userModel.findOne({email:req.body.email});

   bcrypt.compare(req.body.password,user.password,(err,result)=>{
    if(result){
        let token = jwt.sign({email:user.email},"shhhhhhhhhh");
        res.cookie("token",token);
        res.render('/dashboard',{user});
 
    }
    else{
        res.send("you cant log in")
    }
    
    
   });
    
    if(!user) return res.send("Something went wrong");

    

})

app.get('/logout', (req,res)=>{
    res.cookie("token","");
    res.redirect('/')
})
app.listen(3000);
