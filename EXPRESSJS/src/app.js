import express from 'express'
const app = express()

// app.get(route,callback)

app.get('/', function (req, res) {
  res.send('Hello Avinash')
})
app.get('/About', function (req, res) {
  res.send('About page')
})

app.listen(8000,()=>{
  console.log("listening to the port 8000")

})

