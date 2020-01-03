const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Group = require('../../models/Group');
const User = require('../../models/User');
const Idea = require('../../models/Idea');
const Board = require('../../models/Board');

const router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newIdea = new Idea({
            title: req.body.title,
            description: req.body.description,
            board: req.body.boardId,
        })
        newIdea.save()
            .then(idea => {
                Board.findById(req.body.boardId)
                    .then(board => {
                        board.ideas.push(idea);
                        board.save()
                            .then(() => res.json(idea))
                            .catch(err => console.log(err));
                    }).catch(err => console.log(err));
            }).catch(err => console.log(err));
    });

router.post('/upvote/:ideaId', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Idea.findById( req.param.ideaId)
            .then(idea => {
                idea.votes = idea.votes + 1;
                idea.save()
                   .then(idea => res.json(idea))
                   .catch(err => console.log(err));
            }).catch(err => console.log(err));
});


router.post('/downvote/:ideaId', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Idea.findById(req.param.ideaId)
            .then(idea => {
                idea.votes = idea.votes - 1;
                idea.save()
                    .then(idea => res.json(idea))
                    .catch(err => console.log(err));
            }).catch(err => console.log(err));
});