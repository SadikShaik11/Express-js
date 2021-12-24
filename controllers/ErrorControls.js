path = require('path')

const root_dir = require('../util/path')

exports.ErrorContol = (req, res, next) => {
    res.status(404).sendFile(path.join(root_dir, 'views', '404page.html'));
}