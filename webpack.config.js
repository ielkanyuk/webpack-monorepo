const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'serve:dev:portal' || TARGET === 'build:dev:portal') {
    module.exports = require('./config/webpack.config.portal');
    console.info('--> ./config/webpack.config.portal.js');
}
else if (TARGET === 'serve:dev:admin' || TARGET === 'build:dev:admin') {
    module.exports = require('./config/webpack.config.admin');
    console.info('--> ./config/webpack.config.admin.js');
}