/* eslint-disable no-console */
const chalk = require('chalk');
const { spawn } = require('child_process');
const path = require('path');

const log = text => {
  console.log(`${chalk.blue('[LOG]')} ${text}`);
};

const error = text => {
  console.log(`${chalk.red('[ERR]')} ${text}`);
};

const debug = text => {
  console.log(`${chalk.yellow('[DEB]')} ${text}`);
};

const exitWebpack = (server, err) => {
  log('Killing webpack-dev-server');
  server.kill();
  process.exit(err ? 1 : 0);
};

const startWebpack = () => {
  log('Starting webpack-dev-server');
  const server = spawn('yarn', ['start:ci'], {
    cwd: path.join('./example'),
  });

  // Stop on error
  server.stderr.on('data', data => {
    error(`webpack-dev-server err: ${data}`);
    exitWebpack(server, true);
  });

  return server;
};

module.exports = {
  log,
  error,
  debug,
  startWebpack,
  exitWebpack,
};
