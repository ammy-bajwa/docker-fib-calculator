const keys = require('./keys')

// Express App Seetup
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyparser.json())

//Postgress client setup
const {
    Pool
} = require('pg')

const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
})

pgClient.on('error', () => console.log('PG connection lost'))

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch((err) => console.log(err))