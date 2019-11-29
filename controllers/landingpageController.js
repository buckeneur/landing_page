var LandingPage = require('../models/landingpage');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
}
// Display list of all ...
exports.landingpage_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Landing page list');
};

// Display detail page for ...
exports.landingpage_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Landing page detail: ' + req.params.id);
};

// Display entry create form on GET ...
exports.landingpage_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Landing page create GET');
};

// Handle entry create on POST ...
exports.landingpage_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Entry create POST');
};