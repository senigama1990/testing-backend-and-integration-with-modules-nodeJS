//endpointlarni handling qilish uchun class
module.exports = class Express {
    constructor(req, res) {
        this.req = req
        this.res = res
    }
    get(path, callback) {
        if (this.req.url.toLowerCase() === path.toLowerCase() && this.req.method.toUpperCase() === 'GET') {
            callback(this.req, this.res)
        }
    }
}

