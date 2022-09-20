/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** doc.js
*/

const path = require('path');

/**
 * handle all /doc/* requests
 *
 * @param {*} req
 * @param {*} res
 */
exports.get = function (req, res) {
    res.sendFile(path.join(__dirname+'/../..'+req.url));
}

/**
 * Redirect /doc to /doc/index.html
 *
 * @param {*} req
 * @param {*} res
 */
exports.redir = function (req, res) {
    res.redirect('/doc/index.html')
}