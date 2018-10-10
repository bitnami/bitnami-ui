const path = require('path');

export default {
  indexHtml: 'templates/index.html',
  title: 'HEx',
  modifyBundlerConfig: (config) => {
    const rules = config.module.rules;
    const rule = rules[0];

    rules[0].include.push(path.resolve('../hex-react/src/'));

    return {
      ...config,
      module: {
        ...config.module,
        rules
      }
    }
  },
  //theme: '@bitnami/hex-docz-theme'
}
