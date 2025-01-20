import express from 'express';
import {getProducts,getSingleProducts} from '../controllers/productController.js';


const router = express.Router();

router.route('/products').get(getProducts)

router.route('/products/:id').get(getSingleProducts)

export default router;