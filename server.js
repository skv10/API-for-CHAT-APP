const express = require('express');
const dotenv = require('dotenv');
const connectDB= require('./mongodatabase/conn');
const userRoutes = require('./Routes/userRoutes');
const chatRoutes = require('./Routes/chatRoutes');
const messageRoutes = require('./Routes/messageRoutes');
const { notFound, errorHandler } = require('./middlewares/error');

const app = express();
dotenv.config();

connectDB();
app.get('/',(req,res)=>{

});

app.use(express.json());

app.use('/user',userRoutes);
//to start with 10th video and chat user
app.use('/chat',chatRoutes);

app.use('/message',messageRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get('/chat',(req,res)=>{
// //   res.send(chats) //all chat
// });

// app.get('/chat/:id',(req,res)=>{

//     // get singleChatID

//     // const singleChat = chats.find((c)=>c._id === req.params.id);

//     // res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
 console.log(`server is running at :${PORT}`);
});