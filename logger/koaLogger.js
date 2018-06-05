const koa = require('koa')
const app = new koa()

const hostname = 'localhost'
const port = 8000

app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// create middleware to
// log all requests and responses
// write to the body

app.use(async (ctx) => {
    console.log(ctx.request)
    console.log(ctx.response)

    ctx.body = {
        request: ctx.request,
        response: ctx.response
    }
})

app.listen(port, hostname, () => {
    console.log(`look at ${hostname}:${port}`)
})
