const mongoose = require('mongoose');

const bookingInfoSchema = new mongoose.Schema({
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    bookedOrNot:{
        type:Boolean,
        require:true
    },
    bookedBy:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'user'
    },
    day:{
        type:Date,
    }
})

const bookings = mongoose.model('bookings',bookingInfoSchema)
module.exports = bookings