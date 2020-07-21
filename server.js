const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/footie",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    },
    console.log("mongoDB is connected")
)

app.listen(PORT, () => console.log(`API Server is listening on PORT ${PORT}`));