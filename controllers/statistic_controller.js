var models = require('../models/models.js');

// GET  /statistics
exports.index = function(req, res) {
   models.Quiz.findAll(
         {include: [models.Comment]}
   ).then(
     function(quizes) {
      models.Comment.findAll().then(
      function(comments) {
         res.render('statistics', {quizes: quizes, comments: comments, errors:[]});
      })
   });
};


