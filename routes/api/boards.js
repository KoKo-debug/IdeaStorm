const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Group = require('../../models/Group');
const User = require('../../models/User');
const Idea = require('../../models/Idea');
const Board = require('../../models/Board');

const router = express.Router();

router.get('/:board_id', (req, res) => {
    Board.findById( req.params.board_id )
        .populate('ideas')
        .sort({ date: -1 })
        .then(board => res.json(board))
        .catch(err =>
            res.status(404).json({ noboardsfound: 'No board found by that id' }
            )
        );
});

router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newBoard = new Board({
            title: req.body.title,
            description: req.body.description,
            group: req.body.groupId,
        })
        newBoard.save()
          .then(board => {
            Group.findById(req.body.groupId)
              .then(group => {
                  group.boards.push(board);
                  group.save()
                    .then(() => res.json(board))
                    .catch(err => console.log(err));
              }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});