/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** list.js
*/

/**
 * List all user in db
 *
 * @param {*} req
 * @param {*} res
 **/
exports.get = function (req, res) {
    require('../../db').query("SELECT * FROM users",
    function(ret){
        res.send('{\"code\": 200, \"message\": "success", \"content\": '+JSON.stringify(ret.rows)+'}');
    });
}