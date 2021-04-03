const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const user = require('../models/userProfile')
const room = require('../models/roomsInfo')
const review = require('../models/reviews')


router.post('/register', (req,res)=>{
    const{name, password, phone, address} = req.body;
    if(!name || !phone || !password)
        return res.status(400).json({message:"fill all fields"});
   else{
      user.findOne({phone:phone}).then(savedUser=>{
          if(savedUser)
              return res.status(400).json({message:"already used email"});
          else{
              const newUser = new user({
                  name,
                  password,
                  phone,
                  address
              });
        
              newUser.save().then(myUser=>{
                   res.status(200).send(myUser);
              }).catch(err=>{
                  console.log(err);
              })
          }
      }).catch(err=>{
          console.log(err);
      })

  }
})



router.post('/login', (req,res)=>{
    const {phone, password} = req.body;
    user.findOne({phone:phone}).then(myUser=>{
        if(myUser.password==password)
         {
          return res.status(200).json({message:'user is authentic'})   
         }
         else{
           res.status(400).json({message:"wrong email or password"});
         }
        }).catch(err=>{
            console.log(err);
        });
    });

    module.exports = router;