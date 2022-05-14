const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        requires:true
    },
    email :{
        type:String,
        requires:true
    },
    mobile :{
        type:String,
        requires:true
    },

    image :{
        type:String,
        requires:true
    },
    password :{
        type:String,
        requires:true
    },

    is_admin :{
        type:Number,
        requires:true
    },

    is_verified :{
        type:Number,
        default:0
    }
    
});

module.exports = mongoose.model('User',userSchema);