const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    quantity:{type:Number,require:true}
})

// to change the auto created _id to ids
const virtual = cartSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
cartSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform: function(doc,ret){delete ret._id}
})
module.exports = mongoose.model("Cart",cartSchema);