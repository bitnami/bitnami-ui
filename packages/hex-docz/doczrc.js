const path = require('path');

export default {
  indexHtml: 'templates/index.html',
  title: 'HEx',
  modifyBundlerConfig: (config) => {
    const rules = config.module.rules;
    const rule = rules[0];

    rules[0].include.push(path.resolve('../hex-react/src/'));

    console.log(rules[0]);

    return {
      ...config,
      module: {
        ...config.module,
        rules
      }
    }
  }
  // src: './',
  // source: './',
  // theme: 'src/theme/src/index.tsx'
}
