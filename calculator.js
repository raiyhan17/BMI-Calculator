//jhint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true})); //by setting that extended option to true, that basically just allows us to post nested objects. that we're going to be using, but it's something that bodyParser is requiring you


app.get('/',function (req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get('/about',function (req,res){
    res.send("Making calculator on process");
});



app.post('/',function (req,res){
   console.log(req.body);
   var num1 = Number(req.body.num1); // we've to specify where the if the input is number otherwise it will consider as text
   var num2 = Number(req.body.num2);
   var result = num1+num2;

   res.send("The result of the sum is " +result);
    // res.send("Thanks for posting");
});

//bmi calculator get method
app.get('/bmicalculator',function (req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
//bmi calculator post method
app.post('/bmicalculator',function (req,res){
    // res.send("Thanks for posting");
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);// math.pow can be used
    res.send("Your BMI is " + bmi);
});

app.listen(3000,function (){
    console.log("Server started on port: 3000")
});