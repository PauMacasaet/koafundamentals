const fs = require('fs')
//const koa = require('koa')
const spdy = require('spdy')
const express = require('express')
const http = require('http')

const app = express()
const HTTP_PORT = 8000
const HTTP2_PORT = 8001
// const key = fs.readFileSync('key.pem')
// const cert = fs.readFileSync('cert.pem')

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

app.get('/', (req, res) => {
    res.json('hello')
})

const secureServer = spdy.createServer(options, app).listen(HTTP2_PORT, () => {
    console.log(`SPDY on at ${HTTP2_PORT}`)
})

const insecureServer = http.createServer(app).listen(HTTP_PORT, () => {
    console.log(`Unsecured ${HTTP_PORT}`)
})

app.listen(secureServer)
app.listen(insecureServer)