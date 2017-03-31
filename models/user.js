var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    role: {
        type: String,
        default: 'user'
    },
    password: String,
    profileImageUrl:String,
    address:String
});

var model= mongoose.model("User",UserSchema);

module.exports=model;