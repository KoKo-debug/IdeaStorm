const path = require('path');

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./conf/keys").mongoURI;
const users = require("./routes/api/users");
const groups = require("./routes/api/groups");
const boards = require("./routes/api/boards");
const ideas = require("./routes/api/ideas");
const bodyParser = require('body-parser');
const passport = require('passport');

const User = require('./models/User');
const Group = require('./models/Group');
const Board = require('./models/Board');


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

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
app.use("/api/groups", groups);
app.use("/api/boards", boards);
app.use("/api/ideas", ideas);

const port = process.env.PORT || 5000;

// for testing
app.get('/', (req, res) => {
    Group.findOne({ name: 'test group 003' })
        .then(group => {
            const newBoard = new Board({
                title: "test board 001",
                description: "help me!",
                group: group
            });
            newBoard.save().then(
                board => {
                    group.boards.push(board);
                    group.save().then(group => {
                        res.json(group);
                        }
                    ).catch(err => console.log(err))
                }
            ).catch(err => console.log(err))
        }).catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

