const express = require("express");
const router = express.Router();
const User = require('../dbconnection/connection');
router.use(express.json());

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    // Check if the email and password match a user in the database
    const user = await User.findOne({ email, password });

    if (user) {
        res.status(200).send({ code: 200, status: 'success', description: 'Sign-in successfully' });
    } else {
        res.status(401).send({ code: 100, status: 'failed', description: 'Invalid email or password' });
    }

})

module.exports = router;