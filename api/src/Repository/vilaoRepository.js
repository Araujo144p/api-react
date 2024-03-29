import { con } from "./connection.js"





export async function inserirvilao( vilao ){
    const comando = 
    `
    insert into
tb_vilao ( nm_vilao, ds_maldades, bt_super_poder)
values ( ?, ? , ?);
    `

    const [resposta] = await con.query(comando, [vilao.nome, vilao.maldades, vilao.super_poder]);
    vilao.id= resposta.insertId;
    return vilao; 

}


export async function listadevilao(){
    const comando =
    `
    select 
id_vilao   id,
nm_vilao    nome,
ds_maldades  maldades,
bt_super_poder    super_poder
from tb_vilao

    `
    const [resposta]= await con.query(comando);
    return resposta;
}

