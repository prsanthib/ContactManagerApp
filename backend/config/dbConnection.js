const mongoose = require('mongoose');

const connectdb = async () => {

    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected: ");
        console.log(connect.connection.host);
    }
    catch(err){
        console.log(err);
        process.exit();

    }
}

module.exports = connectdb;