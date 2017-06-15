var express = require('express');

var fortune = require('./lib/fortune.js');

var app = express();

var credentials = require('./credentials.js');

var bodyParser = require('body-parser');

var handlebars = require('express-handlebars').create({
    defaultLayout:'main',
    helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        	}
	}
});
app.engine('handlebars' , handlebars.engine);
app.set('view engine' , 'handlebars');

app.set('port' , process.env.PORT || 3000);

app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
}));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next){
	// if there's a flash message, transfer
	// it to the context, then clear it
	res.locals.flash = req.session.flash;
	delete req.session.flash;
	next();
});

app.use(function(req,res,next){
	res.locals.showTests = app.get('env')!=='production'&&req.query.test==='1';
	next();
});

app.get('/' , function(req, res){
	res.render('home');
});

app.get('/about' , function(req, res){
	res.render('about' , {fortune:fortune.getFortune(),
	pageTestScript: '/qa/tests-about.js'});
});

app.get('/tours/hood-river' , function(req,res){
	res.render('tours/hood-river');
});

app.get('/tours/oregon-coast', function(req, res){
	res.render('tours/oregon-coast');
});

app.get('/tours/request-group-rate' , function(req,res){
	res.render('tours/request-group-rate');
});

app.get('/thank-you', function(req, res){
	res.render('thank-you');
});

app.get('/newsletter', function(req, res){
    // we will learn about CSRF later...for now, we just
    // provide a dummy value
    res.render('newsletter', { csrf: 'CSRF token goes here' });
});

function NewsletterSignup(){
}
NewsletterSignup.prototype.save = function(cb){
	cb();
};

var VALID_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

app.post('/newsletter', function(req, res){
	var name = req.body.name || '', email = req.body.email || '';
	// input validation
	if(!email.match(VALID_EMAIL_REGEX)) {
		if(req.xhr) return res.json({ error: 'Invalid name email address.' });
		req.session.flash = {
			type: 'danger',
			intro: 'Validation error!',
			message: 'The email address you entered was  not valid.',
		};
		return res.redirect(303, '/newsletter/archive');
	}
	new NewsletterSignup({ name: name, email: email }).save(function(err){
		if(err) {
			if(req.xhr) return res.json({ error: 'Database error.' });
			req.session.flash = {
				type: 'danger',
				intro: 'Database error!',
				message: 'There was a database error; please try again later.',
			};
			return res.redirect(303, '/newsletter/archive');
		}
		if(req.xhr) return res.json({ success: true });
		req.session.flash = {
			type: 'success',
			intro: 'Thank you!',
			message: 'You have now been signed up for the newsletter.',
		};
		return res.redirect(303, '/newsletter/archive');
	});
});
app.get('/newsletter/archive', function(req, res){
	res.render('newsletter/archive');
});

app.use(function(req , res , next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req , res , next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('Express started on http://localhost' + app.get('port') + ';');
});
