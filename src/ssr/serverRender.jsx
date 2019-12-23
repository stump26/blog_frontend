import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-common';
import { getDataFromTree } from '@apollo/react-ssr';
import { createHttpLink } from 'apollo-link-http';
import { StaticRouter } from 'react-router';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import 'fetch-everywhere';

import App from '../App';
import Html from './Html';

const statsFile = path.resolve(__dirname, '../build/loadable-stats.json');

const serverRender = async (ctx) => {
  // const html = ReactDOMServer.renderToString(<div>Hello Koa Server</div>);
  // ctx.body = html;

  // prepare apollo-client
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://localhost:4000/graphql',
    }),
    cache: new InMemoryCache(),
  });

  const context = {};
  const sheet = new ServerStyleSheet();
  const extractor = new ChunkExtractor({ statsFile });

  const Root = (
    <ChunkExtractorManager extractor={extractor}>
      <StyleSheetManager sheet={sheet.instance}>
        <ApolloProvider client={client}>
          <StaticRouter location={ctx.url} context={context}>
            <App />
          </StaticRouter>
        </ApolloProvider>
      </StyleSheetManager>
    </ChunkExtractorManager>
  );

  try {
    await getDataFromTree(Root);
  } catch (e) {
    console.log('TCL: serverRender -> e', e);
    // TODO: status-code 500
    ctx.throw(500);
    return;
  }

  const content = ReactDOMServer.renderToString(Root);
  const initialState = client.extract();
  const styledElement = sheet.getStyleElement();

  const html = (
    <Html
      content={content}
      apolloState={initialState}
      styledElement={styledElement}
      extractor={extractor}
    />
  );

  ctx.body = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`;
};

export default serverRender;
