import express from 'express';
import dotenvx from '@dotenvx/dotenvx';
import path from 'path';
import products from './routes/product.js';
import orders from './routes/customer.js';
import cors from 'cors';
import {connectDB} from './config/connectDB.js';

const __dirname = import.meta.dirname;

dotenvx.config({path: path.join(__dirname,'config','config.env')})



connectDB();

const app = express();


app.use(express.json())
app.use(cors())
app.use('/api/v1/',products)
app.use('/api/v1/',orders)

app.listen(process.env.PORT || 3000,()=> console.log(`Server is running on port ${process.env.PORT||3000} and in ${process.env.NODE_ENV||"dev"}  mode`))