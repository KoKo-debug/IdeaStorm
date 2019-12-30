const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./conf/keys").mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to mongoDB"))
    .catch(err => console.log(err));

app.use(passport.initialize());
require('./conf/passport')(passport);

app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(bodyParser.json());

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening to port ${port}`);    
});

