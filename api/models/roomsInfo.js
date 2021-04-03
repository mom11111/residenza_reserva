const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomType:{
        type:String,
        require:true
    },
    rent:{
        type:String,
        require:true
    },
    securityMoney:{
        type:String,
        require:true
    },
    pics:[{
        type:String,
        require:true
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    address:{
      state:{
          type:String,
          require:true
      },
      city:{
         type:String,
         require:true
      },
      locality:{
          type:String,
          require:true
      }
    },
    nearestMetro:{
        name:{
            type:String
        },
        distance:{
            type:String
        }
    },
    nearestBus:{
        name:{
            type:String
        },
        distance:{
            type:String
        }
    },
    nearestAirport:{
        name:{
            type:String
        },
        distance:{
            type:String
        }
    }
})

const room = mongoose.model('room', roomSchema)
module.exports = room