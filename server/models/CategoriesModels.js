const mongoose = require('mongoose')


const CategoriesSchema = new mongoose.Schema({
    title : {type:String,required:true}
})

module.exports = mongoose.model('Categories',CategoriesSchema)