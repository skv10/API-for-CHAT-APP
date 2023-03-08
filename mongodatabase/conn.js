const mongoose = require('mongoose');


const connectDB = async ()=>{
    try {
        const connn = await mongoose.connect(process.env.MONGO_URL);
        
        console.log('Mongodb is Connected');
        
    } catch (error) {
        console.log(`Error message:${error}`);
    }
};

module.exports = connectDB;