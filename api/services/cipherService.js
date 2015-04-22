var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var EXPIRES_IN_MINUTES = 60 * 24;
var SECRET = process.env.tokenSecret || "4ukI0uIVnB3iI1yxj646fVXSE3ZVk4doZgz6fTbNg7jO41EAtl20J5F7Trtwe7OM";
var ALGORITHM = "HS256";
var ISSUER = "nozus.com";

module.exports = {

    secret: SECRET,

    issuer: ISSUER,

    /**
     * Hash the password field of the passed user.
     * @param user
     */
    hashPassword: function (user) {
        if (user.password) {
            user.password = bcrypt.hashSync(user.password);
        }
    },

    /**
     * Compare user password hash with unhashed password
     * @param password
     * @param user
     * @returns boolean indicating a match
     */
    comparePassword: function(password, user){
        return bcrypt.compareSync(password, user.password);
    },

    createToken: function(user)
    {
        return jwt.sign({
                user: user.toJSON()
            },
            SECRET,
            {
                algorithm: ALGORITHM,
                expiresInMinutes: EXPIRES_IN_MINUTES,
                issuer: ISSUER
            }
        );
    }

};
