import {inserirvilao, listadevilao} from '../Repository/vilaoRepository.js'
import { Router } from 'express'

const server= Router();

server.post('/vilao', async (req, resp) => {
    try{
    const resposta = await inserirvilao(vilao)
    resp.send(resposta);
    }catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})


server.get ('/vilao', async (req, resp) =>{
    try{
        const resposta = await listadevilao();
    }
}
