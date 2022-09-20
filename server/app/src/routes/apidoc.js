/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** apidoc.js
*/

const path = require('path');

/**
 * get path without {get} arguments
 *
 * @param {String} url
 * @returns {String} url
 */
function getpath(url) {
    const index = url.indexOf("?");
    var ret;
    if (index != -1) {
        ret = url.substring(0, index);
    } else {
        ret = url
    }
    return ret;
}

/**
 * handle all /apidoc/* requests
 *
 * @param {*} req
 * @param {*} res
 */
exports.get = function (req, res) {
    const url = getpath(req.url);
    res.sendFile(path.join(__dirname+'/../..'+url));
}

/**
 * redirect / to /apidoc/index.html
 *
 * @param {*} req
 * @param {*} res
 */
exports.redir = function (req, res) {
    res.redirect('/apidoc/index.html')
}