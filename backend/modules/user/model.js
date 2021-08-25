const { users } = require('../../database/users')
//usersni jo'natish uchun function
const fetchAll = () => users

module.exports = {
    fetchAll
}