const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({path: './config/.env'});
// require('dotenv').config({path: './congif/.env'})
require('./config/db');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//obsolète?
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/api/user' , userRoutes);
//server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})