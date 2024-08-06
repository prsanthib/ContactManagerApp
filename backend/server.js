const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5001

const app = express() //create an instance

app.use('/api/contacts' , require('./Routes/contactRoutes'));

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});