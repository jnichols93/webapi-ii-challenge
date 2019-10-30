const router = require('express').Router()
const Posts = require('./db.js')
//imports


router.get('/', (req, res) => {

    Posts.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
                .json({ error: "The posts information could not be retrieved." })
        })
})
// posts get 

router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
        .then(post => {
            if (post) {
                res.status(200).json(post)
            } else {
                res.status(404)
                    .json({ message: "The post with the specified ID does not exist." })
            }
        })
        .catch(err => {
            console.log('err')
            res.status(500).json({ error: "The post information could not be retrieved." })
        })
})
//single post get

router.get('/:id/comments', (req, res) => {
    const comments = {...req.body, postsId: req.params.id}
    Posts.findById(comments)
    .then(post => {
        if (post) {
            res.status(200).json(comments)
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    })
    .catch(err => {
        console.log('err')
        res.status(500).json({ error: "The post information could not be retrieved." })
    })
})
module.exports = router