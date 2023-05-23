const express = require("express");
const mongoose = require("mongoose");

let app = express();

const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

const url = 
"mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+
"/cluster0?retryWrites=true&w=majority"

console.log(url);

mongoose.connect(url).then(
    () => console.log("Connected to mongoDB"),
    (error) => console.log("Failed to connect to mongoDB. Reason",error)
)

app.listen(3000);

console.log("Running in port 3000");