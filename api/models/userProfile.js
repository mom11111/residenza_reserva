const mongoose = require('mongoose');

const useProfileSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    address:{
       type:String,
       require:true
    }
})

const user = mongoose.model('user',useProfileSchema)
module.exports = user