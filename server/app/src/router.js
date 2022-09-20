/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** router.js
*/

/**
 * the unique app router
 * Contain all the API Doc Definitions
 * @param {*} app the main server express application
 **/
exports.router = function (app) {
    /**
     * @api {get} /users/list Request users list
     * @apiName API
     * @apiGroup Users
     * @apiSuccess {Int} id  id of the User.
     * @apiSuccess {String} username  Username of the User.
     * @apiSuccess {String} mail  Mail of the User.
     * @apiSuccess {String} pass  Pass of the User.
     **/
    app.get('/users/list', require('./routes/users/list.js').get)
    /**
     * @api {get} /users/get Request specific user
     * @apiName API
     * @apiGroup Users
     * @apiSuccess {Int} id  id of the User.
     * @apiSuccess {String} username  Username of the User.
     * @apiSuccess {String} mail  Mail of the User.
     * @apiSuccess {String} pass  Pass of the User.
     **/
    app.get('/users/get', require('./routes/users/get.js').get)
    /**
     * @api {post} /users/create Create a new User
     * @apiName API
     * @apiGroup Users
     * @apiParam {String} username  Username of the User.
     * @apiParam {String} mail  Mail of the User.
     * @apiParam {String} pass  Pass of the User.
     * @apiSuccess {Int} id  id of the created user.
     * @apiSuccess {String} username  Username of the created user.
     * @apiSuccess {String} mail  Mail of the created user.
     * @apiSuccess {String} pass  Pass of the created user.
     **/
    app.post('/users/create', require('./routes/users/create.js').post)
    /**
     * @api {post} /users/login login a User
     * @apiName API
     * @apiGroup Users
     * @apiParam {String} username  Username of the User.
     * @apiParam {String} pass  Pass of the User.
     * @apiSuccess {Int} id  id of the loged user.
     * @apiSuccess {String} username  Username of the loged user.
     * @apiSuccess {String} mail  Mail of the loged user.
     * @apiSuccess {String} pass  Pass of the loged user.
     **/
    app.post('/users/login', require('./routes/users/login.js').post)
    /**
     * @api {get} /about About.json
     * @apiName API
     * @apiGroup About
     * @apiSuccess {Json} file  About.json
     **/
    app.get('/about', require('./routes/about.js').get)
    app.get('/about.json', require('./routes/about.js').get)
    /**
     * @api {get} /doc The Doc
     * @apiName API
     * @apiGroup Documentation
     **/
    app.get('/doc', require('./routes/doc.js').redir)
    app.get('/doc/*', require('./routes/doc.js').get)
    /**
     * @api {get} / The API Doc
     * @apiName API
     * @apiGroup APIDocumentation
     **/
    app.get('/', require('./routes/apidoc.js').redir)
    app.get('/apidoc/*', require('./routes/apidoc.js').get)
    app.get('*', require('./routes/other.js').get)
}