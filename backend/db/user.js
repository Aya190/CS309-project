
const User = require('../db/models/user');

const createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        imagUrl: req.body.imagUrl,
        isAdmin: req.body.isAdmin

    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
};
const getUsurByEmail = async (req,res) => {
   try {
    const email = await User.find();
    res.json(email);
   } catch (error) {
    res.status(500).json({ message: err.message });

   }
};

const getUserById = async (req,res) => {
 try {
    const userid = await User.find();
    res.json(id);
    
 } catch (error) {
    res.status(500).json({ message: err.message });
 }

};



const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createUser, 
    getUsurByEmail,
    getUserById ,
    getAllUsers
   
};