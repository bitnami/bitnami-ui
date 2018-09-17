import React from 'react';
import ReactDOM from 'react-dom';

import { Blockquote, Box } from '@bitnami/hex-react';

const App = () => (
  <div className="container">
    <h1 id="title">HEx</h1>
    <h2>Quote</h2>
    <Blockquote
      className="test"
      marginTop="big"
      marginBottom="small"
      fontSize="big"
      color="accent"
      cite="https://twitter.com"
    >
      Hey! I am a quote
    </Blockquote>
    <Box marginTop="bigger">
      <p>Testing da box!</p>
    </Box>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
