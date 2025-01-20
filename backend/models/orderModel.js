import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    CartItems: {type:Array},
    amount:{type:String},
    status: {type:String},
    createdAt:{type:Date}
})

const orderModel = mongoose.model('Order',orderSchema);

export {orderModel};
