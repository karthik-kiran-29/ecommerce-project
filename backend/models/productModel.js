import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type:String},
    price: {type:String},
    description: {type:String},
    ratings: {type:String},
    images: {type:Array},
    categary: {type:String},
    seller: {type:String},
    stock:{type:String},
    numOfReviews:{type:String},
    createdAt:{type:String}
})

const productModel = mongoose.model('Product',productSchema);

export {productModel};
