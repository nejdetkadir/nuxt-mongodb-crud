const express = require('express')
const router = express.Router()
const Article = require('../models/Article');

/* GET articles */
router.get('/articles', (req, res) => {
  Article.find({}).then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(data)
  })
})

/* GET article with by id */
router.get('/articles/:id', (req, res) => {
  Article.findById(req.params.id)
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* POST create new article */
router.post('/articles/new', (req, res) => {
  const {title, text} = req.body
  new Article({
    title,
    text
  }).save()
  .then(data => {
    res.status(201).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* PUT update article with by id */
router.put('/articles/update', (req, res) => {
  const {_id, title, text} = req.body
  Article.findByIdAndUpdate(_id, {title, text}, {new: true})
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

/* DELETE delete article with by id */
router.delete('/articles/delete', (req, res) => {
  const {id} = req.body
  Article.findByIdAndDelete(id)
  .then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(404).json(err)
  })
})

module.exports = router
