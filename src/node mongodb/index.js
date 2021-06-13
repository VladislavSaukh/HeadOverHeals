require("./models/db")
var MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const router = express.Router();
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const {
    allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
const Student = require("./models/student.model.js");
const studentController = require("./controllers/studentController");


var app = express();

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();



/*app.post('/saveuser', jsonParser, (req, res) => {
    console.log((req.body.username));
    res.sendStatus(200);
  })*/

app.post('/saveuser', jsonParser, function(req, res) {
    var savedata = new Student({
      'username': req.body.username,
      'password': req.body.password,
      'isLogged': false
    }).save(function (err, result) {
      if (err) throw err;
      if (result) {
        res.json(result)
      }
    }) 
  }
  );


console.log(Student)


app.get("/syka", function (req, res){
    res.send("((((((((((((((((((")
})
app.get("/getAllStudents",function(req, res){
    Student.find({}).then((students)=>{
        res.send(students)
    })
})
app.post('/saveuser', (req, res) => {
    console.log('govno')
  })



app.get("/", (req, res) => {
    res.send(`
    <h2>Welcome to Students Database!!</h2>
    <h3>Click here to get access to the <b> <a href="/student/list">Database</a></b></h3>`);
});

app.set("views", path.join(__dirname, "/views/"));

app.engine(
    "hbs",
     exphbs({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "hbs",
    defaultLayout: "MainLayout",
    layoutsDir: __dirname + "/views/layouts/"
}));

app.set("view engine", "hbs");

app.listen(5000, () => {
    console.log("server started at port 5000");
});

app.use("/student", studentController);