//model.jadan fetchAll functionni import qilib olish
const postModel = require('./model')
//express classining get metodi ichidagi callback
//twit ichidagi index.jsga export qilamiz
module.exports = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    //clientga posts api ni yuborish
    return res.end(JSON.stringify(postModel.fetchAll(), null, 4))
}