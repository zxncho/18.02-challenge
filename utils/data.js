const { User, Thought } = require("../models");
const reactionSchema = require("../models/Reaction");
// const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const users = 
[
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  ``,
];

const thoughts = 
[
  'I disagree!',
  'I tried your algorithm, here were the results',
  'This was awesome',
  'Thank you for the great content',
  'Please check out my video response',
  'Like and subscribe to my channel please',
  'Reply: The side effects of in app purchases on digital marketplaces',
];

const lorum = [
  'lorem',
  'imsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'curabitur',
  'vel',
  'hendrerit',
  'libero',
  'eleifend',
  'blandit',
  'nunc',
  'ornare',
  'odio',
  'ut',
  'orci',
  'gravida',
  'imperdiet',
  'nullam',
  'purus',
  'lacinia',
  'a',
  'pretium',
  'quis',
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

const createUsers = () => `${getRandomWord(lorum)} ${getRandomArrItem(users)}`;

const createThoughts = () => {
  let thoughts = '';
  for (let i = 0; i < thoughts; i++) {
    thoughts += ` ${getRandomWord()}`;
  }
  return thoughts;
};

const createReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionSchema
    });
    return results
}};

module.exports = {
  createUsers,
  createThoughts,
  createReactions,
};



// const { User } = require("../models");
// const reactionSchema = require("../models/Reaction");

// const users = [];
// const thoughts = [];
// const friends = [];
// const emails = [];
// const reactions = [];

// const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// const getRandomWord = () => `${thoughts,reactions[genRandomIndex(thoughts,reactions)]}`;

// const createUsers = () => {
// `${getRandomArrItem(User)} ${getRandomArrItem(User)}`;
// };

// const createThoughts = (words) => {
//   let thoughts = '';
//   for (let i = 0; i < words; i++) {
//     thoughts += ` ${getRandomWord()}`;
//   }
//   return thoughts;
// };

// const createReactions = (reactionSchema) => {
//   let reactions = reactionSchema;
//   for (let i = 0; i < words; i++) {
//     reactions += ` ${getRandomWord()}`;
//   }
//   return reactions;
// };

// module.exports = {
//   createUsers,
//   createThoughts,
//   createReactions,
//   // createEmails,
//   // createFriends,
// };

// // const createFriends = () => {
// //     `${getRandomArrItem('users',friends)} ${getRandomArrItem('users',friends)}`;
// // };

// // const createEmails = (emails) => {

// // };



// // const createReactions = (int) => 
// // {
// //     let reactions = '';
// //     for (let i = 0; i < words; i++) {
// //       post += ` ${getRandomWord()}`;
// //     }
// //     return reactions;
// // };

// // const getRandom = (int) => {
// //   const results = [];
// //   for (let i = 0; i < int; i++) {
// //     results.push({
// //       text: getRandomArrItem(users, thoughts),
// //       username: createUsers().split(' ')[0],
// //     });
// //   }
// //   return results;
// // };

// // Export the functions for use in seed.j
