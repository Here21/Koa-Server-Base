const controller = require('./controller');
const authorization = require('../../middleware/Authorization');

const router = [
  { method: 'GET', route: '/data', handlers: [controller.getAll] },
  { method: 'GET', route: '/data/page/:page', handlers: [controller.getData] },
  { method: 'GET', route: '/data/:id', handlers: [controller.getOneById] },
  { method: 'GET', route: '/data/admin/:id', handlers: [authorization.checkAdmin, controller.getOneById] }
];

module.exports = router;
