const ArticleSchema = require('../models/ArticleModels')


async function getAllArticle(req,res){
    try {
       const data = await ArticleSchema.find()
    res.json(
        {   
            msg : 'Berhasil Menampilkan Data Artikel',
            data : JSON.stringify(data)
        })
    } catch (error) {
        res.status(404).json({
            error : error.message
        })
    }
}

async function addArticle(req,res){
   try {
       await ArticleSchema.insertMany({
           title : req.body.title,
           content : req.body.content,
           view : req.body.view,
           categories : req.body.categories,
           publish_date : new Date()
       })
       res.json({
           status : 201,
           msg : 'berhasil ditambah'
       })
    
   } catch (error) {
    res.json({
        status : 404,
        msg : 'gagal ditambahkan'
    })
   }

}


module.exports = {getAllArticle,addArticle}