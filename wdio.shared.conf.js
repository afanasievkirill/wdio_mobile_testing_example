const path = require('path');

exports.config = {
	port: 4723,
	exclude: [],
	maxInstances: 10,
	logLevel: 'info',
	bail: 0,
	baseUrl: 'http://localhost',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	services: ['appium'],
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000,
	},
};
