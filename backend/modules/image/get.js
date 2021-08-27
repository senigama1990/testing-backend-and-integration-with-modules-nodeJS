//model.jadan fetchAll functionni import qilib olish
const imageModel = require('./model')
//express classining get metodi ichidagi callback
//user ichidagi index.jsga export qilamiz
module.exports = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    //clientga users api ni yuborish
    return res.end(JSON.stringify(imageModel.fetchAll(), null, 4))
}