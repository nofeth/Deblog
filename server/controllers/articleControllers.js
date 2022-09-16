// export async function createArticle (){

// }


function getAllArticle(req,res){
    try {
        res.send({"nama" : 'ade'})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAllArticle}