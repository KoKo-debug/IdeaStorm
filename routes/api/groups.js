const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Group = require('../../models/Group');
const User = require('../../models/User');
const generateJoinCode = require('../../util/utils').generateJoinCode;

const router = express.Router();

router.get('/test', (req, res) => {
    Group.findOne({ name: "test group 001"})
        .populate("members")
        .then(group => {
            // template for manipulate response JSON
            const { members, name, creator, joinCode, _id } = group;
            const memberJSON = {};
            const map = new Map();
            for (const member of members) {
                if (!map.has(member._id)) {
                    map.set(member._id, true);
                    memberJSON[member._id] = {
                        _id: member._id,
                        email: member.email,
                        handle: member.handle
                    };
                }
            }
            const membersIds = members.map(member => member._id)
            const resJSON = {
                user: memberJSON,
                groups: {
                    [_id]: {
                        _id, name, creator, joinCode,
                        members: membersIds
                    }
                }
            }
            res.json(resJSON);
        })
        .catch(err => res.status(404).json({ nogroupsfound: 'No groups found' }));
});

router.get('/user/:user_id', (req, res) => {
    Group.find({ creator: req.params.user_id })
        .populate('members')
        .populate("boards")
        .sort({ date: -1 })
        .then(groups => res.json(groups))
        .catch(err =>
            res.status(404).json({ nogroupsfound: 'No groups found from that user' }
            )
        );
});

router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newGroup = new Group({
            name: req.body.name,
            creator: req.body.userId,
            joinCode: generateJoinCode()
        })
        newGroup.save().then(group => {
            res.json(group);
        }).catch(err => console.log(err))
});

router.post('/join', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Group.findOne({ joinCode: req.body.joinCode })
          .then(group => {
              if (!group) {
                  return res.status(404).json({ nogroupsfound: 'No groups found' });
              }
              if (group.members.includes(req.body.userId)) {
                  return res.status(400).json({ cannotjoingroup: 'User already joined group' })
              }
              if (group.creator === req.body.userId) {
                  return res.status(400).json({ cannotjoingroup: 'Creator cannot join group' })
              }
              group.members.push(req.body.userId);
              group.save().
                then(group => {
                  User.findById(req.body.userId)
                    .then(user => {
                        user.joinedGroups.push(group);
                        user.save().
                          then(() => {
                            Group.findOne({ joinCode: req.body.joinCode })
                              .populate('members')
                              .populate('boards')
                              .then(group => {
                                  res.json(group);
                              })
                              .catch(err => console.log(err));
                          })
                          .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
});

module.exports = router;