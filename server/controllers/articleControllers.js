const ArticleSchema = require('../models/ArticleModels')


function getAllArticle(req,res){
    try {
        res.json({ade : 'json'})
    } catch (error) {
        console.log(error);
    }
}

async function addArticle(req,res){
   try {
       await ArticleSchema.insertMany({
           title : req.body.title,
           content : req.body.content,
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