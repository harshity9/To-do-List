const express = require("express");
const bodyParser = require("body-parser")

const date = require(__dirname + "/date.js")


 
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))


var newItem1 = []

var workList = []

var getDate = date.getDate();

app.get("/", function(req, res){
    
    res.render("list",{
    Nophile:getDate,
    newItem: newItem1
})
})
app.get("/work", function(req, res){
    res.render("list", {
     Nophile: "Work List",
     newItem: workList
    }
    )})

app.post("/", function(req, res){
 
    if(req.body.button === "Work List"){
        var workList1 = (req.body.newItem)
        workList.push(workList1)
        res.redirect("/work")
    } 
    else{
        var newItem2 = (req.body.newItem)
        res.redirect("/")
        newItem1.push(newItem2)
    }
})

app.get("/about", function(req, res){
    res.render("about")
})

app.listen(3000, function(){
    console.log("Server started")
})