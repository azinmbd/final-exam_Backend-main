const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const {AllRoutes} = require('./routers/router');
app.use(cors());
app.use(express.json());
app.use(AllRoutes);
// const uri = process.env.ATLAS_URI;

const uri = "mongodb+srv://azinmbd:1234@cluster0.y4rr3j5.mongodb.net/300365490-Azin"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
 console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});