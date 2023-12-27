const { MongoClient } = require('mongodb');
const express = require('express');
const routes = require('./routes');
const { Schema } = require('mongoose');
const connectionStringURI = `mongodb://127.0.0.1:27017/socialmedia`;
const client = new MongoClient(connectionStringURI);

const PORT = process.env.PORT || 3001;
const app = express();

// Use express.json() and express.urlencoded() middleware before defining routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use client.db() constructor to add a new db instance
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // db = client.db(socialmedia)
    // Start the express server after connecting to MongoDB
    app.listen(PORT, () => {
      console.log(`Social media app listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

// Define a callback function for creating a user
app.post('/api/create', (req, res) => {
  // Use db connection to add a user - replace 'YourCollectionName' with the actual collection name
  client.db('socialmedia').collection('user').insertMany([])
    .then(results => res.json(results))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Define a callback function for /api/users
app.get('/api/users', (req, res) => {
  client.db('socialmedia').collection('users')
    .find()
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Define a callback function for /api/thoughts
app.get('/api/thoughts', (req, res) => {
  client.db('socialmedia').collection('thoughts')
    .find()
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

    console.log(`API server running on port ${PORT}!`);


