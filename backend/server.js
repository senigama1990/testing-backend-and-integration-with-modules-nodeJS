// nodejs native moduli httpni chaqirib olish
const http = require('http')
//export from config.js
const {PORT, host} = require('./config.js')
//O'zimiz yasagan express classni import qilib olish
const Express = require('./lib/express')
//user ichidagi index.jsdan get degan functionni import qilish
const userController = require('./modules/user/index')
const imageController = require('./modules/image/index')


//serverni yaratish
const server = http.createServer((req, res) => {
    //Expressdan extense olish
    const app = new Express(req, res)
    //backendga response kelishiga ruxsat berish
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    //appning get methodiga qiymat berish
    app.get('/users', userController.GET)
    app.post('/users', userController.POST)
    app.static('assets')
    app.get('/images', imageController.GET)
})
//serverni ishga tushirish
server.listen(PORT, ()=> console.log(`Server is running on http://${host}:${PORT}`))