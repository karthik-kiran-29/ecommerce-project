import mongoose from 'mongoose';

const connectDB = ()=>{
    try {
        mongoose.connect(process.env.DATABASE_URL).then(()=>{
            console.log("Connection Successfull!")
        })
    } catch (error) {
        console.log("Error Occured:",error);
    }
}

export { connectDB };