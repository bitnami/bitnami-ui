/* eslint-disable no-console */
const { spawn } = require('child_process');
const path = require('path');
const puppeteer = require('puppeteer');
const pa11y = require('pa11y');
const cli = require('pa11y-reporter-cli');
const chalk = require('chalk');

const log = text => {
  console.log(`${chalk.blue('[LOG]')} ${text}`);
};

const error = text => {
  console.log(`${chalk.red('[ERR]')} ${text}`);
};

const exit = (server, err) => {
  log('Killing webpack-dev-server');
  server.kill();
  process.exit(err ? 1 : 0);
};

async function runPa11y() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  await page.goto('http://localhost:9000');
  return pa11y('http://localhost:9000', { browser });
}

// Code to be executed
(async () => {
  // Run the project
  log('Starting webpack-dev-server');

  const server = spawn('yarn', ['start:ci'], {
    cwd: path.join('./example'),
  });

  server.stdout.on('data', async data => {
    if (data.includes('Compiled successfully')) {
      log('The server has been initialized');
      let results;
      try {
        log('Checking accesibility issues');
        results = await runPa11y();
      } catch (error) {
        error(`pa11y err: ${data}`);
        exit(server, true);
      }

      console.log(cli.results(results));

      if (results.issues.length > 0) {
        exit(server, true);
      }

      exit(server, false);
    }
  });

  server.stderr.on('data', data => {
    error(`webpack-dev-server err: ${data}`);
    exit(server, true);
  });
})();
