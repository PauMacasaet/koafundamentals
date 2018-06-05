const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
    console.log('>> one')//1
    await next()
    console.log('>> ???')//3
})

app.use(async (ctx, next) => {
    console.log('>> two') //2
    ctx.body = 'two'
})

app.use(async (ctx, next) => {
    console.log('>> three')
    await next()
})

app.listen(3333)