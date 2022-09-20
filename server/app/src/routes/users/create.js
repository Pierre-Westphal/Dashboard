/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** create.js
*/

/**
 * create user in db
 * check if user already exist
 * @param {*} req
 * @param {*} res
 * @returns  created user
 **/
exports.post = function (req, res) {
    const username = req.body.username;
    const mail = req.body.mail;
    var pass = req.body.pass;

    if (!username || !mail || !pass) {
        res.send('{"code": 400, "message": "Bad request", "content": []}');
        return;
    }
    var query = "SELECT * FROM users WHERE mail = '"+ mail +"'";
    require('../../db').query(query,
        function(ret) {
            if (ret.rows.length != 0) {
                res.send('{"code": 400, "message": "User already exist", "content": []}');
                return;
            }
            var query = "SELECT * FROM users WHERE username = '"+ username +"'";
            require('../../db').query(query,
                function(ret){
                    if (ret.rows.length != 0) {
                        res.send('{"code": 400, "message": "User already exist", "content": []}');
                        return;
                    }
                    pass = require('../../crypt').hash(pass, function(hash) {
                        query = "INSERT INTO public.users(username, mail, pass) VALUES ('"+ username +"', '"+ mail +"', '"+ hash +"');"
                        require('../../db').query(query,
                        function(ret){
                            query = "SELECT * FROM users WHERE mail = '"+ mail +"'";
                            require('../../db').query(query,
                                function(ret){
                                    const user = ret.rows[0]
                                    res.send('{"code": 200, "message": "Success", "content": [{"id": '+ user.id +',"username": "'+ user.username +'", "mail": "'+ user.mail +'", "pass": "'+ user.pass +'"}]}');
                                });
                        });
                    });

                });
        });
}