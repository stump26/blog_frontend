import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import serverRender from './ssr/serverRender';
const app = new Koa();

app.use(
  serve(path.resolve('./build'), {
    index: false,
  }),
);

app.use(serverRender);

app.listen(3001, () => {
  console.log('SSR server is listening to http://localhost:3001');
});
