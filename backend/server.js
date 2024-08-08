const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorHandler')
const connectdb = require('./config/dbConnection')

const port = process.env.PORT || 5001

const app = express() //create an instance

connectdb();
app.use(express.json());
app.use('/api/contacts' , require('./Routes/contactRoutes'));
app.use('/api/users', require('./Routes/userRoutes'));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});