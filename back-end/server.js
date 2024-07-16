const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// Database

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {});

const connection = mongoose.connection;
  
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true }
});

module.exports = mongoose.model('User', userSchema);

// Get users

const User = require('./users.js');

app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// ............................

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});