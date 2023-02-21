const asynchandler =  require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const authUser = asynchandler(async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error("Invalid Email or Password!");
    }
});

module.exports = authUser;