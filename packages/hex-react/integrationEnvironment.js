const NodeEnvironment = require('jest-environment-node');
const { remote } = require('webdriverio');
const config = require('./wdio.conf');
const capabilities = require('./capabilities');

// Identify the build in the project
const buildName = process.env.TRAVIS_TAG || process.env.TRAVIS_COMMIT || 'local';

// Based on https://github.com/smooth-code/jest-puppeteer/blob/6e483e6b64f0517cc8b0dbdd3250c394dfb09417/packages/jest-environment-puppeteer/src/PuppeteerEnvironment.js#L37
class BrowserStackEnvironment extends NodeEnvironment {
  async setup() {
    const capability = process.env.CAPABILITY || Object.keys(capabilities)[0];
    config.capabilities = Object.assign(capabilities[capability], {
      'browserstack.local': true,
      'browserstack.debug': true,
      build: buildName,
      project: 'hex-react',
    });

    const browser = await remote(config);
    this.global.browser = browser;
  }

  async teardown() {
    const { browser } = this.global;

    if (browser) {
      await browser.deleteSession();
    }
  }
}

module.exports = BrowserStackEnvironment;
