const ejs = require("ejs");
const express = require("express");

const app = express();

app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/education", function(req,res){
  res.render("education");
});

app.get("/experience", function(req,res){
  res.render("experience");
});

app.get("/projects", function(req,res){
  res.render("projects");
});

app.get("/resume", function(req,res){
  const filePath = `${__dirname}/public/pdf/hyewon-hwang-resume.pdf`;
  res.download(filePath);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
    console.log("Server started on port " + port.toString());
});