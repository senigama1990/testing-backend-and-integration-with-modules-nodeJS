// nodejs native moduli httpni chaqirib olish
const http = require('http')


//users datani users.js dan olib kelish
const { users } = require('./database/users.js')

//serverni yaratish
const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        //clientga users api ni yuborish
        return res.end(users)
    }
})
//serverni ishga tushirish
server.listen(PORT, ()=> console.log(`Server is running on http://${host}:${PORT}`))