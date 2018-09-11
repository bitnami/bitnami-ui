import React from 'react';
import ReactDOM from 'react-dom';

import { Blockquote } from '@bitnami/hex-react';

const App = () => (
  <div className="container">
    <h1 id="title">HEx</h1>
    <h2>Quote</h2>
    <Blockquote>Hey! I am a quote</Blockquote>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
