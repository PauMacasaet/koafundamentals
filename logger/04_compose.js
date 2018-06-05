const koa = require('koa')
const compose = require('koa-compose')

const app = new koa()

async function functionOne(ctx, next) {
    if ('/gold' == ctx.path) {
        ctx.body = 'Gold medal'
    } else {
        await next()
    }
}

async function functionTwo(ctx, next) {
    if ('/silver' == ctx.path) {
        ctx.body = 'Silver medal'
    } else {
        await next()
    }
}

async function functionThree(ctx, next) {
    if ('/bronze' == ctx.path) {
        ctx.body = 'Bronze medal'
    } else {
        await next()
    }
}

const all = compose([functionOne, functionTwo, functionThree])

app.use(all)

app.listen(5000)