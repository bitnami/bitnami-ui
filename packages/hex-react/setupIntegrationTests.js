import * as webdriverio from 'webdriverio';
import config from './wdio.conf';
import capabilities from './capabilities';

// Set a bigger timeout
jest.setTimeout(60000);

const buildName = process.env.TRAVIS_COMMIT || 'local';

// Add the capabilities
const capability = process.env.CAPABILITY || Object.keys(capabilities)[0];
config.desiredCapabilities = Object.assign(capabilities[capability], {
  'browserstack.local': true,
  'browserstack.debug': true,
  build: buildName,
  project: 'hex-react',
});

// Global callbacks
beforeEach(async () => {
  await browser.init();
});

afterEach(async () => {
  await browser.end();
});

global.browser = webdriverio.remote(config);
