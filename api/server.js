const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const auth = require('../api/routes/userSummary')
const rooms = require('../api/routes/roomSummary')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

mongoose.connect('mongodb+srv://nishant:Ok123456@@cluster0.q0kza.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err,res)=>{
    if(err)
       console.log(err);
    else{
        console.log('connected to db');
    }
});

//mongodb+srv://nishant:<password>@cluster0.3etr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://nishant:Ok123456@@cluster0.q0kza.mongodb.net/test?retryWrites=true&w=majority
app.use(auth);
app.use(rooms)
const port = 4000 || process.env.port;

app.listen(port,(err,res)=>{
    if(err)
       console.log(err);
    else{
        console.log(`connected to ${port}`);
    }
})