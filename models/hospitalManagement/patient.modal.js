import mongoose from "mongoose";

const PatentSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true,
    },
    diagnosiedWith : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    bloodGroup : {
        type:String,
        required : true,
    },
    gender : {
        type : String,
        enum : ["M" , "F" , "O"]
    },
    admittedIn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    },
    
},{timestamps : true})

export const Patent = mongoose.model("Patent" , PatentSchema)