import Router from '@koa/router';
import axios from 'axios';

const sitemaps = new Router();

sitemaps.get('/', (ctx) => {
  ctx.body = ctx.params.xmlfile;
});

sitemaps.get('/:xmlfile', async (ctx) => {
  const target = ctx.params.xmlfile;
  let url = `/${target}`;
  if (process.env.NODE_ENV === 'production') {
    url = `${process.env.REACT_APP_BACKEND_HOST}/sitemaps/${target}`;
  }
  const opt = {
    method: 'get',
    url,
  };

  const res = await axios(opt);
  ctx.body = res.data;
});

export default sitemaps;
