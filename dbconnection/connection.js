const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
router.use(express.json());

mongoose.connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
});

const User = mongoose.model('user_registration', userSchema);

module.exports = User;