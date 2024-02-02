const mongoose = require('mongoose');

export async function connectDb(){
    await mongoose.connect('mongodb://localhost:27017')
    .then(()=> {
        console.log('db is On');
    });

}