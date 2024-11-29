let{Blogs} = require('../models')
let listarBlocksService = async ()=>
{
    try{
        let respuesta = await Blogs.findAll()
        return respuesta;
    }catch(e){

    }
}
module.exports ={listarBlocksService}