const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true , "username is Mandatory"]
    },
    email : {
        type : String,
        required : [true , "email is Mandatory"],
        unique : [true , "Email already reqistered"]
    },
    password : {
        type :String,
        required : [true , "Password is Mandatory"],
    }
},
    {timestamps : true}
);

module.exports = mongoose.Model("User" , userSchema);