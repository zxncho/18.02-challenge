const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find()
        .sort({ createdAt: -1 });

      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get single thought by id
  async getThought(req, res) {
    try {
      const thoughts = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thoughts) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create a thought
  async createThought(req, res) {
    try {
      const thoughts = await Thought.create(req.body);

      const users = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thoughts._id } },
        { new: true }
      );

      if (!users) {
        return res.status(404).json({ message: 'Thought created but no user with this id!' });
      }

      res.json({ message: 'Thought successfully created!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // update thought
  async updateThought(req, res) {
    const thoughts = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true });

    if (!thoughts) {
      return res.status(404).json({ message: 'No thought with this id!' });
    }

    res.json(thoughts);

    console.log(err);
    res.status(500).json(err);
  },
  // // delete thought
  async deleteThought(req, res) {
    try {
      const thoughts = await Thought.findOneAndRemove({ _id: req.params.thoughtId })

      if (!thoughts) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      // remove thought id from user's `thoughts` field
      const users = User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );

      if (!users) {
        return res.status(404).json({ message: 'Thought created but no user with this id!' });
      }

      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add a reaction to a thought
  async addReaction(req, res) {
    try {
      const thoughts = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thoughts) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // remove reaction from a thought
  async removeReaction(req, res) {
    try {
      const thoughts = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thoughts) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = thoughtController;
