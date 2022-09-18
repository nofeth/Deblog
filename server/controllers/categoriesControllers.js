const CategoriesSchema = require('../models/CategoriesModels')

async function getAllCategories(req,res){
    try {
        const data = CategoriesSchema.find()
        // res.setHeader('contentTy')
        res.json(JSON.stringify(data))
    } catch (error) {
        console.log(error);
    }
}

