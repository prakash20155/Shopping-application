var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BrandSchema=new Schema({
    name:{type:String,require:true},
    imageUrl:{type:String},
    description:{type:String},
    isActive:{ type: Boolean, default: true }
});

var model= mongoose.model("Brand",BrandSchema);
module.exports=model;