let {listarBlocksService} = require('../service/blockService');
let listarBlock = async (req,res)=>{
    try{
        let lista = await listarBlocksService();
        res.json({lista});

    }catch(e){

    }
}
module.exports = {listarBlock};