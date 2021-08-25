// nodejs native moduli httpni chaqirib olish
const http = require('http')
//export from config.js
const {PORT, host} = require('./config.js')
//users datani users.js dan olib kelish
const { users } = require('./database/users.js')
//O'zimiz yasagan express classni import qilib olish
const Express = require('./lib/express')


//serverni yaratish
const server = http.createServer((req, res) => {
    //Expressdan extense olish
    const app = new Express(req, res)
    //appning get methodiga qiymat berish
    app.get('/users', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        //clientga users api ni yuborish
        return res.end(JSON.stringify(users, null, 4))
    })
    app.get('/posts', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        //clientga users api ni yuborish
        return res.end(JSON.stringify({x: 'salom'}))
    })
})
//serverni ishga tushirish
server.listen(PORT, ()=> console.log(`Server is running on http://${host}:${PORT}`))