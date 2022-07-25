// serving static website in express js
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

// const staticPath=path.join(__dirname,"../templates/views"); // these two line not needed if view folder under src
// app.set('views',staticPath);

// const templatePath=path.join(__dirname,"../templates") //to change views directory name
// app.set('views',templatePath)

const partialsPath=path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath);

//to set the view engine
app.set("view engine","hbs");
//tempelate engine route
app.get("",(req, res)=>{
  res.render("index");
})


app.get('/', function (req, res) {
    res.send('Hello Avinash')
  })
  app.get('/About', function (req, res) {
    res.send('About page')
  })
  
  app.listen(8000,()=>{
    console.log("listening to the port 8000")
  
  })
  
  