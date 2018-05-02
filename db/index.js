const pgp = require('pg-promise')({})
const dotenv = require('dotenv')
dotenv.load()
// let connection = process.env.DATABASE_URL
let connection = `postgres://localhost/mood`
let db = pgp(connection)

module.exports = db;