/* eslint-disable no-console */
const { spawn } = require('child_process');
const { log, error, debug, startWebpack, exitWebpack } = require('./common');
const chalk = require('chalk');
const browserstack = require('browserstack-local');
const webdriverio = require('webdriverio');
const Listr = require('listr');

// Get capabiilties to test
const capabilities = require('../capabilities.json');
const config = require('../wdio.conf');

// Options for the bsLocal
const opts = {
  key: config.key,
  forcelocal: true,
  onlyAutomate: true,
};

// Tasks to run
const tasks = new Listr(
  Object.keys(capabilities).map(k => {
    return {
      title: `Testing ${k} capability`,
      task: () =>
        new Promise((resolve, reject) => {
          const envOpts = Object.assign(process.env, { CAPABILITY: k });
          const test = spawn('yarn', ['test:integration:single'], { env: envOpts });

          if (process.env.DEBUG && process.env.DEBUG === 'true') {
            // TODO: (angel) move this to a log file
            test.stdout.on('data', data => {
              debug(`${k}: ${data}`);
            });

            // TODO: (angel) move this to a log file
            test.stderr.on('data', testErr => {
              debug(`Error running ${k}`);
              debug(testErr);
            });
          }

          test.on('close', code => {
            if (code === 0) {
              // log(`${chalk.cyan(k)} capability finished ${chalk.green('sucessfully')}`);
              resolve(`${chalk.cyan(k)} capability finished successfully`);
            } else {
              reject(new Error(`${chalk.cyan(k)} capability failed`));
            }
          });
        }),
    };
  }),
  {
    concurrent: true,
  },
);

const runTasks = (server, bsLocal) => {
  tasks
    .run()
    .then(() => {
      bsLocal.stop(() => {
        exitWebpack(server, false);
      });
    })
    .catch(() => {
      bsLocal.stop(() => {
        exitWebpack(server, true);
      });
    });
};

// Code to be executed
(async () => {
  // Run the project
  const server = startWebpack();

  server.stdout.on('data', data => {
    if (data.includes('Compiled successfully')) {
      log('The server has been initialized');

      log('Connecting browserStack local');
      const bsLocal = new browserstack.Local();
      bsLocal.start(opts, bsErr => {
        if (bsErr) {
          error(`Error initializing Browserstart.Local: ${bsErr}`);
          exitWebpack(server, true);
        }

        log('Connected. Now testing...');
        runTasks(server, bsLocal);
      });
    }
  });
})();
