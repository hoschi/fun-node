var vows = require('vows'),
    assert = require('assert')
	zombie = require('zombie');
var browser = new zombie.Browser();
//var browser = new zombie.Browser({debug : true});
browser.runScripts = false;

vows.describe('Google search').addBatch({
    'When we go to google.com': {
        topic: function () {
			browser.visit('http://www.google.de', this.callback);
		},
        'the title should be "Google"': function (browser) {
			// Show me the document contents.
			assert.equal(browser.text("title"), "Google");
        }
    },
    'When we go to google.de': {
        topic: function () {
			browser.visit('http://www.google.de', this.callback);
		},
        'and search for "zombie js"': {
			topic: function (browser) {
				// Show me the document contents.
				browser.fill("q", "zombie js").
					pressButton("Google-Suche",this.callback);
			},
			'the search term is in the title' : function (){
				assert.equal(browser.text("title"), "zombie js - Google-Suche");
			}
		}
    }
}).export(module);

vows.describe('my site').addBatch({
    'When we login as demo user': {
        topic: function () {
			browser.visit('http://dif.dev.hoschi/frontend_dev.php/', function(err, browser){
				browser.pressButton("log in", this.callback); 
			});
		},
		'2': {
			topic: function(browser) {
				browser.fill("signin_username", "demo").
					fill("signin_password", "demo").
					pressButton("sign in", this.callback);
			},
			'we should find a grid': function(browser) {
					assert.equal(browser.html('.nav-user'), "blubb");
			}
		}
    }
}).export(module);
