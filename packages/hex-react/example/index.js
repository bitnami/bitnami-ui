import React from 'react';
import ReactDOM from 'react-dom';

// Polyfills
import '@babel/polyfill';

// Components
import { Blockquote, Box, Text, Grid, Row, Column, Code, Separator, Heading } from '@bitnami/hex-react';

// Code block
import js from 'highlight.js/lib/languages/javascript';
import ruby from 'highlight.js/lib/languages/ruby';

// Register new languages
Code.registerLanguage('js', js);
Code.registerLanguage('ruby', ruby);

const App = () => (
  <Grid>
    <Heading id="title">HEx</Heading>
    <Heading level={2}>Quote</Heading>
    <Blockquote color="brand" cite="https://twitter.com">
      Hey! I am a quote
    </Blockquote>
    <Separator margin="enormous" size="small" width="50" />
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
    <Separator margin="enormous" />
    <Heading level={3}>Code</Heading>
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
    <Heading level={3}>Inline code</Heading>
    <p>
      <Code inline language="js" highlight={false}>
        {`console.log('inline code')`}
      </Code>
    </p>
  </Grid>
);

ReactDOM.render(<App />, document.getElementById('root'));
