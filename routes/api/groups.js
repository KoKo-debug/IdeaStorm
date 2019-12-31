const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Group = require('../../models/Group');
const User = require('../../models/User');

const router = express.Router();

router.get('/', (req, res) => {
    Group.find()
        .sort({ date: -1 })
        .populate("members")
        .then(groups => res.json(groups))
        .catch(err => res.status(404).json({ nogroupsfound: 'No groups found' }));
});

router.get('/user/:user_id', (req, res) => {
    Tweet.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(groups => res.json(groups))
        .catch(err =>
            res.status(404).json({ nogroupsfound: 'No groups found from that user' }
            )
        );
});

module.exports = router;