import React from 'react';
import ReactDOM from 'react-dom';

// Polyfills
import '@babel/polyfill';

// Components
import { Blockquote, Box, Text } from '@bitnami/hex-react';

const App = () => (
  <div className="container">
    <h1 id="title">HEx</h1>
    <h2>Quote</h2>
    <Blockquote className="test" cite="https://twitter.com">
      Hey! I am a quote
    </Blockquote>
    <Box background="accent">
      <Text fontSize="big">Testing da box!</Text>
    </Box>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
