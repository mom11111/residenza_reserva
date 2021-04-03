const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'room'
    },
    review:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }

})

const review = mongoose.model('review', reviewSchema);
module.exports = review;