const koa = require('koa')
const logger = require('koa-logger')
const Router = require('koa-router')
const render = require('./lib/render')
const koaBody = require('koa-body')

const app = module.exports = new koa()

// database

const grades = []

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
    .get('/post/edit/:id', edit)    
    .post('/post', create)
    .get('/post/delete/:id', remove)
    //.put('/post/update', update)



// callbacks

async function list(ctx) {
    await ctx.render('list', { grades: grades })
}

async function add(ctx) {
    await ctx.render('new')
}

async function edit(ctx) {
    const id = ctx.params.id
    const post = grades[id]
    if (!post) ctx.throw(404, 'invalid post id')
    await ctx.render('edit', { post: post })
}

async function remove(ctx) {
    const id = ctx.params.id
    const post = grades[id]

    if (!post) ctx.throw(404, 'invalid post id')
    grades.splice(id,1)

    let i

    for (i = 0; i < grades.length; i++) {
        grades[i].id = i
    }
    ctx.redirect('/') 
}

async function show(ctx) {
    const id = ctx.params.id
    const post = grades[id]
    if (!post) ctx.throw(404, 'invalid post id')
    await ctx.render('show', { post: post })
}

async function create(ctx) {
    const post = ctx.request.body
    const id = grades.push(post) - 1
    post.created_at = new Date()
    post.id = id
    ctx.redirect('/')
}

async function update(ctx) {
    const id = ctx.params.id
    const post = grades[id]
    ctx.redirect('/')
}

app.listen(8000, () => {
    console.log('listening on 8000')
})