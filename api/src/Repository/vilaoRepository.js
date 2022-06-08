import { con } from "./connection.js"





export async function inserirvilao( vilao ){
    const comando = 
    `
    tb_vilao (id_vilao, nm_vilao, ds_maldades, bt_super_poder)
values (?, ?, ? , ?);
    `

    const [resposta] = await con.query(comando, [vilao.nome, vilao.maldade, vilao.super_poder]);
    vilao.id= resposta.insertId;
    return vilao; 

}




