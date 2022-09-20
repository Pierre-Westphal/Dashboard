/*
** EPITECH PROJECT, 2021
** Dashboard
** File description:
** about.js
*/

/**
 * print the About.json file
 *
 * @param {*} req
 * @param {*} res
 **/
exports.get = function (req, res) {
    var about = `{
        "client": {"host": "`+ req.ip +`"},
        "server": {
            "current_time": `+ new Date().getTime() +`,
            "services": [{
                "name": "Crypto",
                "widgets": [{
                    "name": "Bitcoin rate",
                    "description": "Get the actual Bitcoin change rate",
                    "params": [{
                        "name": "USD",
                        "type": "Bool"
                    },{
                        "name": "EUR",
                        "type": "Bool"
                    },{
                        "name": "Refresh rate",
                        "type": "Int"
                    }]
                },{
                    "name": "Ethereum rate",
                    "description": "Get the Ethereum change rate",
                    "params": [{
                        "name": "USD",
                        "type": "Bool"
                    },{
                        "name": "EUR",
                        "type": "Bool"
                    },{
                        "name": "Refresh rate",
                        "type": "Int"
                    }]
                }
            ]
        },{
            "name": "France",
            "widgets": [{
                "name": "Holidays",
                "description": "Get holidays of a french location",
                "params": [{
                    "name": "Location",
                    "type": "String"
                },{
                    "name": "Refresh rate",
                    "type": "Int"
                },{
                    "name": "Scroll speed",
                    "type": "Int"
                }]
            },{
                "name": "Communes",
                "description": "Lists all communes in France",
                "params": [{
                    "name": "Refresh rate",
                    "type": "int"
                },{
                    "name": "Scroll speed",
                    "type": "int"
                }]
            }]
        },{
            "name": "Entertainment",
            "widgets": [{
                "name": "Chuck Norris Facts",
                "description": "Some randoms Chuck Norris facts",
                "params": [{
                    "name": "Refresh rate",
                    "type": "Int"
                }]
            },{
                "name": "Bored",
                "description": "Give you some tips if you are boring",
                "params": [{
                    "name": "Refresh rate",
                    "type": "Int"
                }]
            }]
        }]}}`;
    res.json(JSON.parse(about));
}