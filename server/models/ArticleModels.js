const mongoose = require('mongoose')


const ArticleSchema = new mongoose.Schema({
    title : {type:String,required: true},
    content: {type:String,required: true},
    categories : [String],
    publish_date : {type: Date,required: true}
})

module.exports = mongoose.model("Article",ArticleSchema)