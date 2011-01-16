var assert = require('assert')
	zombie = require('zombie');
var browser = new zombie.Browser({debug: true});
browser.runScripts = false;

browser.visit('http://dif.dev.hoschi/', function(err, browser){
		console.log(browser.html());
		//browser.evaluate("window.fn()");
		browser.window.fn();
});
