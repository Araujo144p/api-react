import {inserirvilao, listadevilao} from '../Repository/vilaoRepository.js'
import { Router } from 'express'

const server= Router();

server.post('/vilao', async (req, resp) => {
    try{
        const nome= req.body;
    const resposta = await inserirvilao(nome)
    resp.send(resposta);
    }catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})


server.get ('/vilao', async (req, resp) =>{
    try{
        const nome= req.body;
        const resposta = await listadevilao(nome);
        resp.send(resposta);

    }
    catch(err){
        resp.status(401).send({
            erro:err.message
        })
    }
})

export default server;