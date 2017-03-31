var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CategorySchema=new Schema({
    name:{type:String,require:true},
    parentCategory:{type: Schema.Types.ObjectId, ref: 'Category'},
    subCategory:[{type: Schema.Types.ObjectId, ref: 'Category'}],
    description:{type:String},
    isActive:{type:Boolean}
});

var model= mongoose.model("Category",CategorySchema);
module.exports=model;