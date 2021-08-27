// nodejs native moduli httpni chaqirib olish
const http = require('http')
//export from config.js
const {PORT, host} = require('./config.js')
//users datani users.js dan olib kelish
const { users } = require('./database/users.js')
//O'zimiz yasagan express classni import qilib olish
const Express = require('./lib/express')
//user ichidagi index.jsdan get degan functionni import qilish
const userController = require('./modules/user/index')
//twit ichidagi index.jsdan get degan functionni import qilish
const twitController = require('./modules/twit/index')


//serverni yaratish
const server = http.createServer((req, res) => {
    //Expressdan extense olish
    const app = new Express(req, res)
    //appning get methodiga qiymat berish
    app.get('/users', userController.GET)
    app.post('/users', userController.POST)
    app.get('/posts', twitController.GET)
})
//serverni ishga tushirish
server.listen(PORT, ()=> console.log(`Server is running on http://${host}:${PORT}`))