const koa = require('koa')
const logger = require('koa-logger')
const Router = require('koa-router')
const render = require('./lib/render')
const koaBody = require('koa-body')

const app = module.exports = new koa()

// database

const posts = []

// middleware

app.use(logger())
app.use(render)
app.use(koaBody())
const router = new Router()
app.use(router.routes())
//routes

router.get('/', list)
    .get('/post/new', add)
    .get('/post/:id', show)
    .post('/post', create)



// callbacks

async function list(ctx) {
    await ctx.render('list', { posts: posts })
}

async function add(ctx) {
    await ctx.render('new')
}

async function show(ctx) {
    const id = ctx.params.id
    const post = posts[id]
    if (!post) ctx.throw(404, 'invalid post id')
    await ctx.render('show', { post: post })
}

async function create(ctx) {
    const post = ctx.request.body
    const id = posts.push(post) - 1
    post.created_at = new Date()
    post.id = id
    ctx.redirect('/')
}

app.listen(8000, () => {
    console.log('listening on 8000')
})