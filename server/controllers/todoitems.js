const TodoItemsService = require('../services').todoItems;

module.exports = {
  create(req, res) {
    return TodoItemsService.create(req, res);
  }
};