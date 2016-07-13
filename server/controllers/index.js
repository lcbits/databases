
var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      console.log('this is the get msg', req);
      models.messages.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('posted messages', req.body);
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  }
};

