/**
 * 204 (NoContent) Response
 *
 * General status code. Most common code used to indicate delete success.
 * The actual response will depend on the request method used.
 */

module.exports = function (data, code, message, root) {
    var response = _.assign({
        code: code || 'NO_CONTENT',
        message: message || 'Operation is successfully executed',
        data: data || {}
    }, root);

    this.req._sails.log.silly('Sent (204 NoContent)\n', response);

    this.res.status(204);
    this.res.jsonx(response);
};
