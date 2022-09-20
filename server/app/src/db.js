/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** db.js
*/

const { Client } = require('pg')
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: 5432,
  });
client.connect()

/**
 * do a query to the database
 *
 * @param {String} query  SQL
 * @param {Function} callback
 **/

exports.query = function (query, callback) {
    client.query(query)
        .then(res => {
            callback(res)
        })
        .catch(e => console.error(e.stack))
}