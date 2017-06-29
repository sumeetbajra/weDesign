var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Profile = require('../models/profile');

router.post('/insert', function(req, res){
	console.log('::::yes');
	var profile = new Profile(req.body);
	profile.save(function(err, doc){
		if (err) throw err;
		res.redirect('/');
	});
});


module.exports = router;