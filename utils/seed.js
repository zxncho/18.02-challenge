const { Timestamp } = require('mongodb');
const connection = require('../config/connection');
const { createUsers, createThoughts, createReactions } = require('./data');
const thoughtController = require('../controllers/thought-controller');
const userController = require('../controllers/user-controller'); // Adjust the path as needed
const reactionSchema = require('../models/Reaction');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to the "socialmedia" database
connection.once('open', async () => {
  const socialMediaDB = connection.db.collection('socialmedia');

  // Delete existing collections
  await socialMediaDB.collection('thoughts').deleteMany({});
  await socialMediaDB.collection('users').deleteMany({});
//   await socialMediaDB.collection('reactions').deleteMany({});

  // Empty arrays for randomly generated posts and comments
  const randomUsers = createUsers();
  const randomThoughts = createThoughts(10); // Specify the number of thoughts you want
  const randomReactions = createReactions(5); // Specify the number of reactions you want

  // Wait for the users to be inserted into the database
  await userController.createUser(randomUsers);

  // Wait for the thoughts array to be inserted into the database
  await thoughtController.createThought(randomThoughts);

  // Wait for the reactions array to be inserted into the database
  await reactionSchema.collection('reactions').insertMany(randomReactions);

  // Log out a pretty table for users, thoughts, and reactions
  console.table(randomUsers);
  console.table(randomThoughts);
  console.table(randomReactions);

  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});


// const { Timestamp } = require('mongodb');
// const connection = require('../config/connection');
// const { Thought, User } = require('../models');
// const reactionSchema = require('../models/Reaction');
// // const {
// //     createUsers,
// //     createFriends,
// //     createThoughts,
// //     createReactions,
// //     createEmails,
// // } = require('./data');

// // Start the seeding runtime timer
// console.time('seeding');

// // Creates a connection to mongodb
// connection.once('open', async () => {
//   // Delete the collections if they exist thoughts and users here are the names of the tables
//   let thoughtCheck = await connection.db.socialmedia({ name: 'thoughts' }).toArray();
//   if (thoughtCheck.length) {
//     await connection.socialmedia('thoughts');
//   }

//   let userCheck = await connection.db.socialmedia({ name: 'users' }).toArray();
//   if (userCheck.length) {
//     await connection.socialmedia('users');
//   }

//   // Empty arrays for randomly generated posts and comments
//   const randomThoughts = [...createThoughts];
//   const randomUsers = [...createUsers];
//   const randomFriends = [...createFriends];
//   const randomReactions = [...createReactions];
//   const randomEmails = [...createEmails]


//   // Makes thoughts array
//   const createThoughts = (text) => {
//     randomThoughts.push({
//       text,
//       username: getRandomName(userlist),
//       reactions: createReactions(),
//       createdAt: Timestamp,
//     });
//   };

//   // Wait for the comments to be inserted into the database
//   await Thought.collection.insertMany(randomThoughts);

//   // For each of the comments that exist, make a random post of 10 words
//   randomThoughts.forEach(() => makeThought(createThoughts));

//   // Wait for the posts array to be inserted into the database
//   await Thought.collection.insertMany(randomThoughts);

//   const createUsers = () => {
//     randomUsers.push({
//         username: getRandomName(),
//         email: createEmails(),
//         thoughts:createThoughts(),
//         friends: createFriends(),
//     });
//   };

//   await User.collection.insertMany(randomUsers);

//   // For each of the comments that exist, make a random post of 10 words
//   randomUsers.forEach(() => createUsers());

//   // Wait for the posts array to be inserted into the database
//   await User.collection.insertMany(randomUsers);

//   const createFriends = () => {
//     randomFriends.push({
//         username: createUsers(),
//         email: createEmails(),
//         thoughts:createThoughts(),
//         friends: createFriends(),
//     });
//   };

//   await User.collection.insertMany(randomFriends);

//   // For each of the comments that exist, make a random post of 10 words
//   randomFriends.forEach(() => createFriends());

//   // Wait for the posts array to be inserted into the database
//   await User.collection.insertMany('friends',randomFriends);


//   const createReactions = () => {
//     randomReactions.push({
//         text,
//         username: createUsers(),
//     });
//   };

//   await reactionSchema.collection.insertMany(randomReactions);

//   // For each of the comments that exist, make a random post of 10 words
//   randomReactions.forEach(() => createReactions());

//   // Wait for the posts array to be inserted into the database
//   await reactionSchema.collection.insertMany(randomReactions);

//   const createEmails = () => {
//     randomEmails.push({
//        email: createUsers()
//     });
//   };

//   await reactionSchema.collection.insertMany(randomEmails);

//   // For each of the comments that exist, make a random post of 10 words
//  User.forEach(() => createEmails());

//   // Wait for the posts array to be inserted into the database
//   await User.collection.insertMany(randomEmails);


//   // Log out a pretty table for comments and posts
//   console.table(users);
//   console.table(thoughts);
//   console.timeEnd('seeding complete 🌱');
//   process.exit(0);
// });


