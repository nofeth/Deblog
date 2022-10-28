const express = require('express')
const { getAllArticle, addArticle, detailArticle } = require('../controllers/articleControllers.js')

const router = express.Router()

router.get('/',getAllArticle)
router.get('/:id',detailArticle)

router.post('/',addArticle)

module.exports = router