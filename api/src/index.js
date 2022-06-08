import 'dotenv/config'
import express from 'express'
import vilaocontroller from './Controller/vilaoController.js'
import cors from 'cors'
const server = express();

server.use(cors());
server.use(express.json());
server.use(vilaocontroller);


server.listen(process.env.PORT, ()=> console.log(`Api conectada a porta ${process.env.PORT}`));