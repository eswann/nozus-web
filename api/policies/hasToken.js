module.exports = function (req, res, next) {
    var token = req.headers['authorization'];
    if (token) {
        next();
    } else {
        res.unauthorized(null, null, 'You must provide application token');
    }
};
