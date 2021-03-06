import path from 'path';
import serverRender from './ssr/serverRender';
import Koa from 'koa';
import serve from 'koa-static';
import proxy from 'koa-better-http-proxy';
import Router from '@koa/router';
import compress from 'koa-compress';
import sitemaps from './ssr/sitemaps';

const app = new Koa();
const router = new Router();

router.use('/sitemaps', sitemaps.routes());

app.use(
  serve(path.resolve('./build'), {
    index: false,
  }),
);

app.use(
  compress({
    filter: function(content_type) {
      return /text/i.test(content_type);
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH,
  }),
);

app.use(router.routes()).use(router.allowedMethods());

app.use(serverRender);

if (process.env.NODE_ENV === 'development') {
  const proxyMiddleware = proxy('localhost', { port: 4000 });
  app.use(proxyMiddleware);
}

app.listen(3001, () => {
  console.log('SSR server is listening to http://localhost:3001');
});
