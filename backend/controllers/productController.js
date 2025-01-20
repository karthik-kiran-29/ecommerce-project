import { productModel } from "../models/productModel.js"


const getProducts = async (req,res) =>{
    const query = req.query.keyword?{name:{$regex:req.query.keyword,$options:'i'}}:{};
    const product = await productModel.find(query);
    res.json({new:"success",product})
}

const getSingleProducts = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const singleProduct = await productModel.findById(id);
        res.json({new:"success",singleProduct})
    } catch (error) {
        res.json({new:"sucess", error: error.message})
    }
}

export {getProducts,getSingleProducts};
