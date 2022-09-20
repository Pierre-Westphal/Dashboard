/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** login.js
*/

/**
 * Login
 *
 * @param {*} req
 * @param {*} res
 * @returns user
 **/
exports.post = function (req, res) {
    const username = req.body.username;
    const pass = req.body.pass;

    if (!username || !pass) {
        res.send('{"code": 400, "message": "Bad request", "content": []}');
        return;
    }
    require('../../db').query("SELECT * FROM users WHERE username = '"+ username +"'",
        function(ret){
            if (ret.rows.length == 0) {
                res.send('{"code": 401, "message": "User not found", "content": []}');
                return;
            }
            const user = ret.rows[0];
            require('../../crypt').compare(pass, user.pass, function (passIsMatching) {
                if (passIsMatching) {
                    res.send('{"code": 200, "message": "Success", "content": [{"id": '+ user.id +',"username": "'+ user.username +'", "mail": "'+ user.mail +'", "pass": "'+ user.pass +'"}]}');
                } else {
                    res.send('{"code": 401, "message": "Wrong credentials", "content": []}');
                }
            })
        });
}