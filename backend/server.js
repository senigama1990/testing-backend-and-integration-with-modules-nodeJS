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

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    //Expressdan extense olish
    const app = new Express(req, res)

    if (req.method === 'OPTIONS') return res.end('200')
    //backendga response kelishiga ruxsat berish
    //appning get methodiga qiymat berish
    app.get('/users', userController.GET)
    app.post('/users', userController.POST)
    app.static('assets')
    app.get('/images', imageController.GET)
})
//serverni ishga tushirish
server.listen(PORT, ()=> console.log(`Server is running on http://${host}:${PORT}`))