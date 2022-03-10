const path = require('path');
const { config } = require('./wdio.shared.conf');

config.port = 4723;

config.specs = ['./test/specs/ios/**/*.js'];

config.capabilities = [
	{
		platformName: 'Android',
		'appium:platformVersion': '14.5',
		'appium:deviceName': 'iPhone 12 Pro',
		'appium:automationName': 'XCUItest',
		'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app'),
	},
];

exports.config = config;
