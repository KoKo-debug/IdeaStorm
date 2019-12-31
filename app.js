const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./conf/keys").mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/User');
const Group = require('./models/Group');

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

app.get('/', (req, res) => {
    User.findOne({ email: 'test001@mail.com' })
        .then(user => {
            const newGroup = new Group({
                name: "test group 001",
                creator: user,
                joinCode: "abcd1234"
            });
            newGroup.members.push(user);
            newGroup.save().then(
                group => {
                    user.createdGroups.push(group);
                    user.save().then(user => {
                        user.populate('createdGroups');
                        res.json(user);
                        }
                    );
                }
            )
        })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

