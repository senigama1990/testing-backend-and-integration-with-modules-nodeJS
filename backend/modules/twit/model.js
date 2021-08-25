const { posts } = require('../../database/posts')
//postsni jo'natish uchun function
const fetchAll = () => posts

module.exports = {
    fetchAll
}