const koa = require('koa')

const app = new koa()

app.use(async (ctx) => {
    console.log('Hello Koa')
})

app.listen(8080)

console.log(`server up on 8080`)