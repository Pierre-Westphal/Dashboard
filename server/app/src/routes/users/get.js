/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** get.js
*/

/**
 * Get user in db by user.id
 *
 * @param {*} req
 * @param {*} res
 * @returns user
 **/
exports.get = function (req, res) {
    const id = req.query.id;
    if (id === undefined) {
        res.send('{"code": 400, "message": "Bad request", "content": []}');
        return;
    }
    require('../../db').query("SELECT * FROM users WHERE id = "+ id,
    function(ret){
        user = ret.rows[0]
        if (user === undefined) {
            res.send('{"code": 404, "message": "Not found", "content": []}');
            return;
        }
        res.send('{"code": 200, "message": "Success", "content": [{"id": '+ user.id +',"username": "'+ user.username +'", "mail": "'+ user.mail +'", "pass": "'+ user.pass +'"}]}');
    });
}