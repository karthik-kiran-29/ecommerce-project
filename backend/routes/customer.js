import express from 'express';
import {getOrder} from '../controllers/customerController.js';

const router = express.Router();

router.route('/order').post(getOrder)

export default router;