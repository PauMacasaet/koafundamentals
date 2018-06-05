const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()

router.get('/hello', ctx => {
    const data = 'hello to all'

    ctx.status = 200
    ctx.body = {
        working: 'success',
        data: data
    }
})

router.get('/hello/:name', (ctx) => {
    const name = ctx.params.name
    const data = `Hello ${name.toUpperCase()}`

    ctx.status = 200
    ctx.body = {
        working: 'success',
        data: data
    }
})

app.use(router.routes())
app.listen(8000, () => {
    console.log(`Server started at port 8000`)
})