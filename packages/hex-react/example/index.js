import React from 'react';
import ReactDOM from 'react-dom';

// Polyfills
import '@babel/polyfill';

// Components
import { Blockquote, Box, Text, Grid, Row, Column, Code } from '@bitnami/hex-react';

// Code block
import js from 'highlight.js/lib/languages/javascript';
import ruby from 'highlight.js/lib/languages/ruby';

// Register new languages
Code.registerLanguage('js', js);
Code.registerLanguage('ruby', ruby);

const App = () => (
  <Grid>
    <h1 id="title">HEx</h1>
    <h2>Quote</h2>
    <Blockquote color="brand" cite="https://twitter.com">
      Hey! I am a quote
    </Blockquote>
    <Box background="accent">
      <Grid>
        <Row collapse={[1, 2, 2, 3, 3]} align="center">
          <Column span={2}>
            <Text fontSize="big" textAlign="center">
              Testing da box!
            </Text>
          </Column>
          <Column span={2}>
            <Text fontSize="big" textAlign="center">
              Testing da box!
            </Text>
          </Column>
          <Column span={2}>
            <Text fontSize="big" textAlign="center">
              Testing da box!
              <br />
              Testing da box!
            </Text>
          </Column>
          <Column span={2}>
            <Text fontSize="big" textAlign="center">
              Testing da box!
            </Text>
          </Column>
          <Column span={2}>
            <Text fontSize="big" textAlign="center">
              Testing da box!
            </Text>
          </Column>
          <Column span={2}>
            <Text fontSize="big" textAlign="center">
              Testing da box!
            </Text>
          </Column>
        </Row>
      </Grid>
    </Box>
    <h3>Code</h3>
    <Code language="js">
      {`
        const test = (num) => num + 1;
        test(1);

        const anotherFunc = () => {
          return 'This is a test';
        }
      `}
    </Code>
    <Code language="js">{`const test = (num) => num + 1;`}</Code>
    <Code language="js">
      {`const test = (num) => num + 1;
const test = 1`}
    </Code>
    <Code language="ruby">
      {`
        def test
          puts "hello world"
        end
      `}
    </Code>
    <h3>Inline code</h3>
    <p>
      <Code inline language="js" highlight={false}>
        {`console.log('inline code')`}
      </Code>
    </p>
  </Grid>
);

ReactDOM.render(<App />, document.getElementById('root'));
