"use strict"

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const { signIn, signUp, refresh, tokenValidate } = require('./handlers')
const { user } = require('../database/models');

const app = express()
app.use(bodyParser.json())
app.use(cors());

// Install middleware to validate token
app.use(tokenValidate);

app.post('/api/signup', signUp)

// Authentication endpoints
app.post('/api/signin', signIn)
app.post('/api/refresh', refresh)

// API ENDPOINTS
// create a user
app.post('/api/users', (req, res) => {
    console.log(req.body)
    user.create(req.body)
        .then(user => res.json(user))
})
// get all users
app.get('/api/users', (req, res) => {
    console.log(req.body);
    return res.json({message: 'success'});
    User.findAll().then(users => res.json(users))
})

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})