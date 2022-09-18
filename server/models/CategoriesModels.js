const mongoose = require('mongoose')


const CategoriesSchema = new mongoose.Schema({
    'nama' : {type : String,required : true}
})

module.exports = mongoose.model('categories',CategoriesSchema)