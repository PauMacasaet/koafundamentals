// const http2 = require('http2')
// const koa = require('koa')
// // const Router = require('koa-router')
// const fs = require('fs')

// const app = new koa()
// // const router = new Router()

// const options = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// }

// // router.get('/', async (ctx, next) => {
// //     ctx.status = 200
// //     ctx.body = 'using http2'

// //     await next()
// // })

// // app.use(router.routes())

// app.use(ctx => {
//     ctx.body = 'secure http2'
// })

// const server = http2.createSecureServer(options, app.callback())
// server.listen(8000)

// // http2
// //     .createServer(options, app)
// //     .listen(8000, (err) => {
// //         if (err) {
// //             throw new Error(err);
// //         }

// //         console.log('Listening on port: ' + 8000 + '.');
// //     });

const fs = require('fs');
const http2 = require('http2');
const koa = require('koa');

const options = {
    key: fs.readFileSync('./selfsigned.key'),
    cert: fs.readFileSync('./selfsigned.crt'),
};

const app = new koa();
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

const server = http2.createSecureServer(options, app.callback());
server.listen(443);