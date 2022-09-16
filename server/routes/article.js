const express = require('express')
const { getAllArticle, addArticle } = require('../controllers/articleControllers.js')

const router = express.Router()

router.get('/',getAllArticle)

router.post('/',addArticle)

module.exports = router