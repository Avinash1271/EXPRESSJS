import express from 'express'
const app = express()

app.get('/',  (req, res)=> {
  res.send("<h1>Welocome to my home page</h1>")    //sending html data as a response
})
app.get('/about',  (req, res)=> {
  res.status(200).send('Welocome to my About page')
})
app.get('/contact',  (req, res)=> {
    res.status(200).send('Welocome to my contact page')
})
app.get('/temp', (req,res)=>{              //sending json data as a response 
    res.send({                             // we can also use res.json
        "id":10,
        "name":"Avinash"
    })
})

app.listen(8000,()=>{
  console.log("listening to the port 8000")

})

