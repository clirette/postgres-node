const TodoService = require('../services').todos;

module.exports = {
  retrieve(req, res) {
    return TodoService.retreive(req, res);
  },

  create(req, res) {
    return TodoService.create(req, res);
  },

  list(req, res) {
    return TodoService.list(req, res);
  }
};