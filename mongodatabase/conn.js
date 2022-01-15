const mongoose = require('mongoose');


const connectDB = async ()=>{
    try {
        const connn = await mongoose.connect("mongodb://localhost:27017/ChatApp");
        
        console.log('Mongodb is Connected');
        
    } catch (error) {
        console.log(`Error message:${error}`);
    }
};

module.exports = connectDB;