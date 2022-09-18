const CategoriesSchema = require('../models/CategoriesModels')

async function getAllCategories(req,res){
    try {
        const data = await CategoriesSchema.find()
        res.json({data,msg : 'halo'})
        return
    } catch (error) {
        console.log(error);
    }
}

async function addCategories(req,res){
    try {
        const duplicate = await CategoriesSchema.find({title : req.body.title})
        if (duplicate) {
            throw new Error('Nama kategori sudah digunakan')
        }
        await CategoriesSchema.insertMany({
            title : req.body.title
        })
        res.status(201).json({
            msg : 'Kategori berhasil ditambahkan',
        })
        return;
    } catch (error) {
        res.status(200).json({
            msg : error.message
        })
    }

}

async function deleteCategories(req,res){
    await CategoriesSchema.deleteMany({
        _id : req.body._id
    })
    res.json({
        msg : 'Kategori berhasil dihapus'
    })
}

module.exports = {getAllCategories,addCategories,deleteCategories}