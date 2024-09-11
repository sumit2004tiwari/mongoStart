import mongoose, { Mongoose } from "mongoose"

const userSchema = new Mongoose.Schema(
    {
        username: {
            typeof: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email :{
            typeof : String,
            required: [true , "email is required section"],
            unique: true,
            lowercase: true,
            
        },
        password:{
            typeof: String,
            required: [true , "password is manadotary"],
            lowercase : true,
            
        }
    },
    {timestamps : true}
)

export const User = mongoose.Model("User" , userSchema)
