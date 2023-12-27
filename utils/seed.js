const { Timestamp } = require('mongodb');
const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {
    createUsers,
    createFriends,
    createThoughts,
    createReactions,
    createEmails,
} = require('./userdata','./thoughts');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist thoughts and users here are the names of the tables
  let thoughtCheck = await connection.db.socialmedia({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.socialmedia({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  // Empty arrays for randomly generated posts and comments
  const randomThoughts = [...createThought];
  const randomUsers = [...createUser];


  // Makes thoughts array
  const makeThought = (text) => {
    randomThoughts.push({
      text,
      username: getRandomName(userlist),
      reactions: createReactions(),
      createdAt: Timestamp,
    });
  };

  // Wait for the comments to be inserted into the database
  await Thought.collection.insertMany(randomThoughts);

  // For each of the comments that exist, make a random post of 10 words
  randomThoughts.forEach(() => makeThought(createThoughts));

  // Wait for the posts array to be inserted into the database
  await Thought.collection.insertMany(randomThoughts);

  const makeUser = () => {
    randomUsers.push({
        username: getRandomName(),
        email: createEmails(),
        thoughts:createThoughts(),
        friends: createFriends(),
    });
  };

  await User.collection.insertMany(randomUsers);

  // For each of the comments that exist, make a random post of 10 words
  randomUsers.forEach(() => makeUser());

  // Wait for the posts array to be inserted into the database
  await User.collection.insertMany(randomUsers);


  // Log out a pretty table for comments and posts
  console.table(randomThoughts);
  console.table(randomUsers);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});