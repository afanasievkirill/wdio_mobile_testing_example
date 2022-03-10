const path = require('path');
const { config } = require('./wdio.shared.conf');

config.port = 4723;

config.specs = ['./test/specs/android/**/*.js'];

config.capabilities = [
	{
		platformName: 'Android',
		'appium:platformVersion': '11.0',
		'appium:deviceName': 'Android Emulator',
		'appium:automationName': 'UIAutomator2',
		'appium:app': path.join(process.cwd(), 'app/android/ColorNote.apk'),
		'appium:autoGrantPermissions': true,
	},
];

exports.config = config;
