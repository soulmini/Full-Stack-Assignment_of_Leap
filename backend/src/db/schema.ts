const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : String,
    description :String,
    dis : String,
    due_date : String,
    completed : Boolean,
    email : String
})

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, // Ensures uniqueness for the email field
    },
    password : String,
})


export const User = mongoose.model('User', userSchema);
export const Todo = mongoose.model('Todo', todoSchema);