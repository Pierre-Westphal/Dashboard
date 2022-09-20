const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * Hash & Salt a plain text
 * Execute callback on hash
 * @param {*} plainText
 * @param {*} callback
 **/
exports.hash = function(plainText, callback) {
    bcrypt.hash(plainText, saltRounds, function(err, hash) {
        callback(hash);
    });
}

/**
 * compare plaitext to hash
 * Execute callback on result
 * @param {*} plainText
 * @param {*} hash
 * @param {*} callback
 **/
exports.compare = function(plainText, hash, callback) {
    bcrypt.compare(plainText, hash, function(err, result) {
        callback(result)
    });
}