const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const user = require('../models/userProfile')
const room = require('../models/roomsInfo')
const review = require('../models/reviews')
const bookings = require('../models/roomsBookingInfo')

router.post('/addrooms',(req,res)=>{
    const{roomType, rent, securityMoney, pics, owner, address, nearestMetro, nearestBus, nearestAirport} = req.body
    if(!roomType || !address || !rent || !securityMoney || !pics){
        return res.status(400).json({message:'Please fill roomType ,rent ,address, secuirtyMoney and pics'})
    }
    const newRoom =new room({
        roomType,
        rent,
        securityMoney,
        pics,
        owner,
        address,
        nearestMetro,
        nearestBus,
        nearestAirport
    })
    newRoom.save().then(added=>{
        res.status(200).json({message:'room added successfully'})
    }).catch(err=>{
        res.status(400).send(err)
    })

})

router.post('/searchroombylocation', (req,res)=>{
   const{state, city, locality} = req.body
   if(state && !city && !locality){
      room.find({address:{state:state}}).then(roomsByState=>{
          if(roomsByState.length>0){
              return res.status(200).send(roomsByState)
          }
          else{
              return res.status(400).json({message:'sorry no rooms at this location'})
          }
      })
   }
   if(state && city){
    room.find({$and:[{address:{state:state}},{address:{city:city}}]}).then(roomsByStateAndCity=>{
        if(roomsByStateAndCity.length>0){
            return res.status(200).send(roomsByStateAndCity)
        }
        else{
            return res.status(400).json({message:'sorry no rooms at this location'})
        }
    })
   }
})

router.post('/searchroombyowner', (req,res)=>{
      room.find({owner:req.body.user}).then(ownerRooms=>{
           if(ownerRooms.length>0){
               res.status(200).send(ownerRooms);
           }
           else{
               return res.status(400).json({message:'sorry you have no rooms'})
           }
      })
})

router.post('/getvacantrooms', (req,res)=>{
      
})

router.post('/bookroom',(req,res)=>{
    const{roomId, userId} = req.body
    const newBooking = new bookings({
        roomId,
        bookedOrNot:true,
        bookedBy:userId,
        day:Date.now()
    })
    newBooking.save().then(saved=>{
        res.status(200).json({message:'saved successfully'})
    }).catch(err=>{
        res.status(400).send(err);
    })
})

module.exports = router