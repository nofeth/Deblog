const express = require('express')
const router = express.Router()
const {addCategories,getAllCategories, deleteCategories} = require('../controllers/categoriesControllers')

router.get('/',getAllCategories)

router.post('/',addCategories)

router.delete('/',deleteCategories)

module.exports = router