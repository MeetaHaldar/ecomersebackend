const express = require('express'); 

const app = express(); 

//middlewares 
app.use(express.json());  

const routes = require('./routes/index'); 

app.use('/',routes)

app.get('/',(req,res)=>{
    res.send('Hello👋')
})


// to serve the static files 
app.use('/uploads',express.static('uploads'));


module.exports = app;  