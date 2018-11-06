const path = require('path');

// Public folder
const PUBLIC = path.resolve(__dirname, 'public');

// Base
const base = process.env.BASE_DOCZ_SITE || '/';

export default {
  indexHtml: 'templates/index.html',
  title: 'HEx',
  base,
  modifyBundlerConfig: (config) => {
    const rules = config.module.rules;
    const rule = rules[0];

    rules[0].include.push(path.resolve('../hex-react/src/'));

    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@images': `${PUBLIC}/images`,
    });

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
