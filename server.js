import express from 'express';
import route from './routes/Tweet.js';
import dotenv from 'dotenv';
import cors from 'cors';



dotenv.config();

const {port} = process.env || 3300;
const app = express();
app.use(cors()) //middleware cors
app.use(express.json())

app.use("/",route)
app.listen(port,(req,res)=>{
    console.log(`server is running on http://localhost:${port}`)
});