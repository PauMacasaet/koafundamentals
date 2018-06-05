const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()

const hostname = 'localhost'
const port = 8000

router.get('/hello', (ctx) => {
    const data = 'Hello World'
    ctx.status = 200
    ctx.body = data
    console.log('regular route')
})

router.get('/ask', (ctx) => {
    const data = 'AAA'
    ctx.status = 200
    ctx.body = data
    console.log('regular route')
})

router.get('/hello/:num([0-9]{4})', ctx => {
    const num = ctx.params.num
    const data = `number: ${num} strict digit count`
    ctx.status = 200
    ctx.body = data
    console.log(data)
})

router.get('/hello/:num([0-9]*)', ctx => {
    const num = ctx.params.num
    const data = `number: ${num} one or more digits`
    ctx.status = 200
    ctx.body = data
    console.log(data)
})

router.get('/combo/:id([A-Za-z0-9]*)', ctx => {
    const id = ctx.params.id
    const data = `letter-number: ${id}`
    ctx.status = 200
    ctx.body = data
    console.log(data)
})

router.get(/[abc]/, ctx => {
    //const name = ctx.params.name
    const data = `name`
    ctx.status = 200
    ctx.body = data
    console.log(data)
})

router.get(/\d{1,2}-\d{1,2}-\d{4}/, ctx => {
    const data = `date output`
    ctx.status = 200
    ctx.body = data
    console.log(data)
})

router.get(/he?ak/, (ctx) => {
    const data = 'optional letter before ?'
    ctx.status = 200
    ctx.body = data
    console.log(data)
})

router.get(/(blue|red|green)s?/, ctx => {
    const data = 'plurals optional'
    ctx.status = 200
    ctx.body = data
    console.log(data)
})


router.get(/^hey.*joe$/, ctx => {
    const data = 'start with hey end with joe'
    ctx.status = 200
    ctx.body = data
    console.log(data)
})

router.get(/d/, (ctx) => {
    const data = 'Has a D'
    ctx.status = 200
    ctx.body = data
    console.log('has at least certain letter')
})

router.get(/bo*ho*/, ctx => {
    const data = 'working'
    ctx.status = 200
    ctx.body = data
    console.log(data)
})

router.get(/ball(er)?/, ctx => {
    const data = 'incomplete'
    const status = 200
    ctx.body = data
    console.log(data)
})

router.get(/x|u|l/, ctx => {
    const data = 'any one of several patterns'
    ctx.status = 200
    ctx.body = data
    console.log('a|b|c')
})

app.use(router.routes())
app.listen(port, hostname, function() {
    console.log(`go to ${hostname} at port ${port}`)
});