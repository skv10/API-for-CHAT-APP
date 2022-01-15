const asyncHandler = require('express-async-handler');
const Chat = require('../models/chatModel');
const User = require('../models/userModel');
const Message = require('../models/messagesModel');

const sendMessage = asyncHandler(async(req,res)=>{

    const { content , chatId} = req.body;

    if(!content || !chatId){
        res.status(400).send("Invalid data passed into the request");
    }

    var newMessage = {
        sender:req.user._id,
        content:content,
        chat:chatId,
    };

    try {
        var message = await Message.create(newMessage)
        
        message = await message.populate("sender","name pic");
        message = await message.populate("chat");

        message = await User.populate(message,{
            path:"chat.users",
            select:"nbame ppic email",
        });

        await Chat.findByIdAndUpdate(chatId,{
            latestMessage:message,
        });

        res.json(message);

    } catch (error) {

        res.status(400);
        throw new Error(error.message);
        
    }

});


const getAllMessage = asyncHandler(async(req,res)=>{

    try {
        const message = await Message.find({id:req.params.id},{content:1,_id:0})

        res.json({message});
    } catch (error) {
        res.status(400);
        throw new Error(error.message);   
    }

});

module.exports ={sendMessage,getAllMessage};