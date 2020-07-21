const express = require('express');
const mongoose = require("mongoose");

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
    }
)

app.listen(PORT, () => console.log(`API Server is listening on PORT ${PORT}`));