const express = require("express");
const router = express.Router();
const User = require('../dbconnection/connection');
router.use(express.json());

router.post('/', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    const user = new User({
        first_name,
        last_name,
        email,
        password,
    });

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(409).send({ code: 100, status: 'failed', description: 'EmailId already exists' });
    }

    user.save()
        .then(() => {
            res.status(201).send({ code: 200, status: 'success', description: 'User created successfully' });
        })
        .catch((error) => {
            console.error('Error creating user:', error);
            res.status(500).send('An error occurred');
        });
})

module.exports = router;