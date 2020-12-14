const express = require('express');
const app = express();

const APP_ID = process.env.APP_ID||5000;

app.get('/', (req, res)=>{
    res.status(200).send(`APP ID: ${APP_ID} home page says hello!`);
})

app.get('/about',(req, res)=>{
    res.status(200).send(`APP ID: ${APP_ID} about page says hello!`);
})

app.listen(APP_ID,()=>console.log(`Healthy server running on port ${APP_ID}`));