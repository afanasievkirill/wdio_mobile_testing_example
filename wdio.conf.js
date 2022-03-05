const path = require('path');

exports.config = {
	port: 4723,
	specs: ['./test/specs/android/**/*.js'],
	exclude: [],
	maxInstances: 10,
	capabilities: [
		{
			platformName: 'Android',
			'appium:deviceName': 'Android Emulator',
			'appium:automationName': 'UIAutomator2',
			'appium:app': path.join(process.cwd(), 'app/android/ColorNote.apk'),
			'appium:autoGrantPermissions': true,
		},
	],
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
