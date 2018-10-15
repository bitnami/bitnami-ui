import React from 'react';

import { Code } from '@bitnami/hex-react/src'

import js from 'highlight.js/lib/languages/javascript';
Code.registerLanguage('js', js);

const RegisterLanguage = () => (
  <Code>
    {`
      // Components
      import { Code } from '@bitnami/hex-react';

      // Code block
      import js from 'highlight.js/lib/languages/javascript';

      // Register new languages
      Code.registerLanguage('js', js);

      const Example = () => (
        <Code>
          const num = 1;
        </Code>
      );
    `}
  </Code>
);

export default RegisterLanguage;
