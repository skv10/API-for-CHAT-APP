const express = require('express');

const {protect} = require('../middlewares/authMiddleware');

const { sendMessage ,getAllMessage} = require("../route-Controllers/messageController");


const router = express.Router();


router.route("/").post(protect,sendMessage);

router.route("/:chatId").get(protect,getAllMessage);



module.exports = router;

