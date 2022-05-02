const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connectDb = require('./db/connect');
const cors = require('cors');

//Require dotenv
require('dotenv').config();

// req router
const router = require('./routes/crud');

//Middlewares
app.use(express.json());
app.use(cors());

//Route
app.use('/api/v1/crud', router)

//Connection
const start = async () => {
    try {
        await connectDb(process.env.MONGO_CONNECT);        
        app.listen(port, (req,res)=>{
            console.log(`---Connected to a Mongo-ATLAS DataBase`)
            console.log(`---Server is running on port: [${port}] `);
        })
    } catch (error) {
        console.log(error)
    }
}

// Teste if API is working
app.get('/', (req,res)=>{
    res.status(200).send('<h1>Backend API is working</h1>');
})

start();

