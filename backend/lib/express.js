const path = require('path')
const fs = require('fs')
//endpointlarni handling qilish uchun class
module.exports = class Express {
    constructor(req, res) {
        this.req = req
        this.res = res
    }
    //backend dan get metodi orqali ma'lumot olish
    get(path, callback) {
        if (this.req.url.toLowerCase() === path.toLowerCase() && this.req.method.toUpperCase() === 'GET') {
            callback(this.req, this.res)
        }
    }
    //backendga POST metodi orqali ma'lumot yuborish
    post(path, callback) {
        if (this.req.url.toLowerCase() === path.toLowerCase() && this.req.method.toUpperCase() === 'POST') {
            callback(this.req, this.res)
        }
    }
    static(folderName) {
        if (this.req.url !== '/' && this.req.method === 'GET') {
            let filePath = this.req.url
            let reqMimetype = path.extname(filePath)
            let mimeTypes = {
                '.jpg': 'image/jpg'
            }

            let contentType = mimeTypes[reqMimetype] || 'application/octet-stream'
            fs.readFile(path.join(process.cwd(), folderName, filePath), (err, data) => {
                this.res.writeHead(200, { 'Content-Type': contentType })
                this.res.end(data)
            })
        }
    }
}

