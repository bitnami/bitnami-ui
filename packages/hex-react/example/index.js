import React from 'react';
import ReactDOM from 'react-dom';

// Polyfills
import '@babel/polyfill';

// Components
import { Blockquote, Box, Text, Grid } from '@bitnami/hex-react';

const App = () => (
  <Grid>
    <h1 id="title">HEx</h1>
    <h2>Quote</h2>
    <Blockquote className="test" cite="https://twitter.com">
      Hey! I am a quote
    </Blockquote>
    <Box background="accent">
      <Text fontSize="big">Testing da box!</Text>
    </Box>
  </Grid>
);

ReactDOM.render(<App />, document.getElementById('root'));
