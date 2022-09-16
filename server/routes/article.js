const express = require('express')
const { getAllArticle } = require('../controllers/articleControllers.js')

const router = express.Router()

router.get('/',getAllArticle)

module.exports = router