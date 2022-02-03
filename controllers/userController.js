const { del } = require('express/lib/application');
const { User, Thought } = require('../models');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
            .populate('friends')
            .populate('thoughts');
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a single user
const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId })
            .populate('friends')
            .populate('thoughts');
        if (user) res.json(user);
        else res.status(404).json({ message: 'No user with that ID' });
    } catch (err) {
        res.status(500).json(err);
    }
};

// create a new user
const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const updUser = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (updUser) res.json(updUser);
        else res.status(404).json({ message: 'No user with this id!' })
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a user and remove their thoughts
const deleteUser = async (req, res) => {
    try {
        const delUser = await User.findOneAndRemove({ _id: req.params.userId });
        if (delUser) {
            try {
                const delThoughts = await Thought.deleteMany({ username: req.params.username });
                console.log(delThoughts);
                if (delThoughts.deletedCount > 0) res.json({ message: 'User & all their thoughts successfully deleted' });
                else res.json({ message: 'User deleted, but no thoughts found' })
            } catch (err) {
                res.status(500).json(`Error deleting user's thoughts: ` & err);
            }
        } else {
            res.status(404).json({ message: 'No such user exists' })
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

/* ======================== FRIENDS ======================== */

// Add an friend to a user
// /api/users/:userId/friends/:friendId
const addFriend = async (req, res) => {
    try {
        const newFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        ).populate('friends');
        if (newFriend) res.json(newFriend);
        else res.status(404).json({ message: 'No user found with that ID' })
    } catch (err) {
        res.status(500).json(err);
    }
};

// Remove friend from a user
const removeFriend = async (req, res) => {
    try {
        const delFriend = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } }
        );
        if (delFriend) res.json(delFriend);
        else res.status(404).json({ message: 'No user found with that ID' })
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
};