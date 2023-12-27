const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('./userdata');

const  
{
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction, 
} = require('./thoughts');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.socialmedia({ name: 'thoughts' }).toArray();
  if (thoughtCheckCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.socialmedia({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  // Empty arrays for randomly generated posts and comments
  const thoughts = [...getThoughts];
  const users = [];


  // Makes comments array
  const makePost = (text) => {
    posts.push({
      text,
      username: getRandomName().split(' ')[0],
      comments: [comments[genRandomIndex(comments)]._id],
    });
  };

  // Wait for the comments to be inserted into the database
  await Comment.collection.insertMany(comments);

  // For each of the comments that exist, make a random post of 10 words
  comments.forEach(() => makePost(getRandomPost(10)));

  // Wait for the posts array to be inserted into the database
  await Post.collection.insertMany(posts);

  // Log out a pretty table for comments and posts
  console.table(comments);
  console.table(posts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});