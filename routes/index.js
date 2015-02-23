
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Chris\'s Site' });
};

exports.about = function(req, res){
  res.render('about', {title: 'About Chris'});
};

exports.socialMedia = function(req, res) {
  res.render('socialMedia', {title : 'Social Media Links'});
};
