require('dotenv').config();
require('./db/connect');

const express = require('express');
const app = express();

const recruitmentRoute = require("./routes/recruitment");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/",recruitmentRoute);


app.listen(process.env.LISTEN_PORT, () => {
    console.log(`listening on port ${process.env.LISTEN_PORT}`)
})
