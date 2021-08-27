const { users } = require('../../database/users')
//usersni jo'natish uchun function
const fetchAll = () => users
const insertUser = (user) => {
    let {username, password, age} = JSON.parse(user)
    let newUser = {
        user_id: users[users.length - 1].user_id + 1,
        username, password, age
    }
    users.push(newUser)
    return newUser
}
module.exports = {
    fetchAll,
    insertUser
}