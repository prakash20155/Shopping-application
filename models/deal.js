var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DealSchema = new Schema({
    offerName:String,
    Validity:Date,
    Tagline:String,
    Product:{type: Schema.Types.ObjectId, ref: 'Product'},
    Discount:{type:Number},
    isActive:Boolean
});

module.exports = mongoose.model('Deal', DealSchema);