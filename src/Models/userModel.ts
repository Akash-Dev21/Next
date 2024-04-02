import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : [true, "please provide an email "]
    },
    password : {
        type : String,
        required : ["true" , "please provide a password"]
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date
})

const User = mongoose.model("Users" , userSchema);
export default User;