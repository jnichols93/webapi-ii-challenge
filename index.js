console.log("COME GET YO DATA!")
//sanity check valid

const express = require('express')
const db = require('./data/db')
const postRouter = require('./posts/post-router.js/index.js')
//imports^

const server = express()
const port  = 3000
server.listen(port, () => console.log('posts running on 3000'))
server.use(express.json())
server.use('/api/posts', postRouter)
//server definition ^

server.get('/', (req, res) => {
    res.send('Post Data Retrieval')
})