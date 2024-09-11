
import mongoose from "mongoose";

//schema    
const  schema = new mongoose.Schema({
    name: 
    {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique: true,
    },
    password: {
        type : String,
        required : true,
        select: false,
    },
    //user create kb hoa
    createdAt : {
        type: Date,
        default: Date.now,
    }
});

//model
export const User = mongoose.model("User", schema);