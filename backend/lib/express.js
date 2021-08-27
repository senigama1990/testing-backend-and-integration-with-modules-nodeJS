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
}

