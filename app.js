const express = require('express');
const app = express();
const SignInRouter = require('./routes/Sign_In');
const SignUpRouter = require('./routes/Sign_Up');

app.use('/sign_in', SignInRouter);
app.use('/sign_up', SignUpRouter);
let port = process.env.PORT | 4000


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
