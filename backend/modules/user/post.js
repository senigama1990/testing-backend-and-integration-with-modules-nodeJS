//model.jadan fetchAll functionni import qilib olish
const userModel = require('./model')
// userga post methodin
module.exports = (req, res) => {
    let buffer = ''
    req.on('data', (data) => {
        buffer += data
    })
    req.on('end', () => {
        let newUser = userModel.insertUser(buffer.toString())
        if (newUser) {
            res.writeHead(201, {'Content-Type': 'application/json'})
            return res.end(JSON.stringify({message: 'The user has been added', body: newUser}))
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify({ message: 'An error accured', body: null }))
        }
    })
}