import { con } from "./connection.js"





export async function inserirvilao( vilao ){
    const comando = 
    `
    insert into
tb_vilao ( nm_vilao, ds_maldades, bt_super_poder)
values ( 'coringa', 'assalto' , false);
    `

    const [resposta] = await con.query(comando, [vilao.nome, vilao.maldade, vilao.super_poder]);
    vilao.id= resposta.insertId;
    return vilao; 

}


export async function listadevilao(){
    const comando =
    `
    select 
id_vilao   id,
nm_vilao    nome,
ds_maldades   descriçao,
bt_super_poder    boolean
from tb_vilao

    `
    const [resposta]= await con.query(comando);
    return resposta;
}

