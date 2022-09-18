const ArticleSchema = require('../models/ArticleModels')


async function getAllArticle(req,res){
    try {
       const datas = await ArticleSchema.find()
       console.log(datas);
       res.json(
        {   
            msg : 'berhasil',
            data : JSON.stringify(datas)
        })
    } catch (error) {
        console.log(error);
    }
}

async function addArticle(req,res){
   try {
       await ArticleSchema.insertMany({
           title : req.body.title,
           content : req.body.content,
           categories : req.body.categories
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