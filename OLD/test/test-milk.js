(function () {
	'use strict';

	let test = require('sdk/test');
	let {
		before, after
	} = require('sdk/test/utils');
	let Events = require("../data/events.js");
	let RememberTheMilk = require('../data/milk/Milk.js');

	let events = new Events();

	exports['test auth url'] = function (assert) {
		let milk = new RememberTheMilk({a: 'key', b: 'secret'}, events, 'write');
		let expectedAuthUrl = 'https://www.rememberthemilk.com/services/auth/?api_key=key&perms=write&frob=FOOBAR&api_sig=0018da7b53dfd5606939a45023087738';
		milk.setFrob('FOOBAR');
		assert.strictEqual(milk.getAuthUrl(), expectedAuthUrl, 'Bad authUrl returned.');
	};
	
	before(exports, function (name) {
		console.log('================================================================================');
		console.log(`Running milk: ${name}`);
	});

	after(exports, function (name) {
		console.log(`Finished milk: ${name}`);
		console.log('================================================================================');
	});

	test.run(exports);

}());
