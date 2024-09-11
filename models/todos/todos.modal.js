import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    subTodos : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "subTodo"
        }
    ]
},{timestamps:true}) 

export const Todos = mongoose.model("Todo" , TodoSchema) 