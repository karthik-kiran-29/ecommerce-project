import { orderModel } from "../models/orderModel.js"

export const getOrder = async (req,res,next) =>{
    const CartItems = req.body;
    const amount =Number( CartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
    const status = "pending";
    try {
        const result = await orderModel.create({CartItems,amount,status})
        res.json({new:"success",result})
    } catch (error) {
        res.json({new:"failed",error: error.message})
    }
}



