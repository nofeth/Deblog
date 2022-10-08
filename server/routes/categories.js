const express = require('express')
const router = express.Router()
const {addCategories,getAllCategories,editCategories, deleteCategories} = require('../controllers/categoriesControllers')

router.get('/',getAllCategories)

router.post('/',addCategories)

router.put('/',editCategories)

router.delete('/',deleteCategories)

module.exports = router