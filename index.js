import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';


const PORT = 5000
const DB = 'mongodb+srv://denum:hostdenum@sub-ser.p6ooncc.mongodb.net/?retryWrites=true&w=majority'

const app = express();

app.use(express.json());

app.use('/api/user', userRouter )

async function startApp() {
    try {
        await mongoose.connect(DB)
        app.listen(PORT, () => console.log("server is running"));
        
    } catch (error) {
        console.log(error);
    }
}
startApp();