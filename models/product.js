var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductReviewSchema = new Schema({
    reviewer:{ type: Schema.Types.ObjectId, ref: 'User'},
    rating:Number,
    reviewDate:Date,
    feedback:String
});

var ProductSchema = new Schema({
    title: { type: String, required: true, trim: true },
    slug:{type:String},
    price: { type: Number, required: true, min: 0 },
    actualPrice: { type: Number, required: true, min: 0 },
    stock: { type: Number, default: 1 },
    description: String,
    specification:String,
    rating:Number,
    imageUrl: String,
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category', index: true }],
    brand:{type: Schema.Types.ObjectId, ref: 'Brand'},
    //variants: {}, //price can be on variant
    // features: Array,
    // keyFeatures: Array,
    UserReview:[ProductReviewSchema],
    isActive:{type:Boolean}


    // to make search faster by giving point or like help
}).index({
    'title': 'text',
    'description': 'text'
});

module.exports = mongoose.model('Product', ProductSchema);