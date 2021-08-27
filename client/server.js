const http = require('http')
const fs = require('fs')
const path = require('path')
const {PORT, host} = require('./config')

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        fs.readFile(path.join('assets', 'index.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            return res.end(data)
        })
    } else {
        let filePath = req.url
        let reqMimetype = path.extname(filePath)
        let mimeType = {
            ".js": 'text/javascript',
            '.html': 'text/html',
            'css': 'text/css'
        }
        let contentType = mimeType[reqMimetype] || 'application/octet-stream'

        fs.readFile(path.join(process.cwd(), 'assets', filePath), (err, data) => {
            res.writeHead(200, { 'Content-Type': contentType })
            return res.end(data)
        })
    }
})

server.listen(PORT, () => console.log(`Server running on http://${host}:${PORT}`))