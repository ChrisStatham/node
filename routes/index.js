
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Chris\'s Site' });
};

exports.about = function(req, res){
  res.render('about', {title: 'About Chris'});
};
