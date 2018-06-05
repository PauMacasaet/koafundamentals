const Koa = require('koa')
const Router = require('koa-router')


const app = new Koa()
const router = new Router()

app.use(async (ctx, next) => {
    console.log('LOGGED')
    await next()
})

router.get('/', async ctx => {
    console.log('Hello World')
    ctx.body = 'success'
})

app.use(router.routes())
app.listen(3000)