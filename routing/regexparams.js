const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()

router.get('/hello/:id([0-9]{5})', ctx => {
    const id = ctx.params.id
    const data = `Number: ${id}`
    
    ctx.status = 200
    ctx.body = data
})

app.use(router.routes())

app.listen(8000, () => `On`)