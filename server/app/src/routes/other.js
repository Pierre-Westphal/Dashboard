/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** other.js
*/

/**
 *  Redirect unknown route to apidoc route
 *
 * @param {*} req  request
 * @param {*} res  resutl
 **/
exports.get = function (req, res) {
    res.redirect('/');
}