import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { Helmet } from 'react-helmet';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-common';
import { getDataFromTree } from '@apollo/react-ssr';
import { createHttpLink } from 'apollo-link-http';
import { StaticRouter } from 'react-router';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { ServerStyleSheets as MaterialServerStyleSheets } from '@material-ui/core/styles';
import 'fetch-everywhere';

import App from '../App';
import Html from './Html';
// import CacheManager from './CacheManager';

const statsFile = path.resolve(__dirname, '../build/loadable-stats.json');
// const cacheManager = new CacheManager();
const uri = process.env.REACT_APP_BACKEND_HOST + '/graphql';

const serverRender = async (ctx, next) => {
  ctx.compress = true;

  // if path is graphql, route to proxy by next();
  if (process.env.NODE_ENV === 'development' && /^\/(graphql|signin)/.test(ctx.path)) {
    return next();
  }

  // const loggedIn = !!ctx.cookies.get('token');
  // if exist page cache on redis, return cached page at redis
  // const cachedPage = await cacheManager.get(ctx.url);
  // if (cachedPage) {
  //   ctx.body = cachedPage;
  //   return;
  // }

  // prepare apollo-client
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: uri,
    }),
    cache: new InMemoryCache(),
  });

  const context = {};
  const sheet = new ServerStyleSheet();
  const materialSheet = new MaterialServerStyleSheets();
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
  const materialStyledElement = materialSheet.getStyleElement();
  const helmet = Helmet.renderStatic();

  const html = (
    <Html
      content={content}
      apolloState={initialState}
      styledElement={styledElement}
      materialStyledElement={materialStyledElement}
      extractor={extractor}
      helmet={helmet}
    />
  );

  const pageHtml = `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`;

  ctx.body = pageHtml;

  // Set redis chching page
  // setImmediate(() => {
  //   cacheManager.set(ctx.url, pageHtml);
  // });
};

export default serverRender;
