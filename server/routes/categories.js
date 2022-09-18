const express = require('express')
const router = express.Router()
const categoriesControllers = require('../controllers/categoriesControllers')

router.get('/',categoriesControllers)