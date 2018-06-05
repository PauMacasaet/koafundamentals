const koa = require('koa')
const Router = require('koa-router')

// import koa from 'koa'
//import Router from 'koa-router'

const app = new koa()
const router = new Router()

router.get('/hello', ctx => {
    const name = ctx.query.name
    const data = `my name is ${name}`
    ctx.status = 200
    ctx.body = data
})

app.use(router.routes())
app.listen(8000, () => {
    console.log('listening at port 8000')
})