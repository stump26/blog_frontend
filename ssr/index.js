const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();

app.use(serve(path.resolve(__dirname, '../build/')));
app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
