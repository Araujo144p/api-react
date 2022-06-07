import MYSQL from 'mysql2/promise'

const con = await MYSQL.createConnection ({
    host: process.env.MYSQL.HOST,
    user: process.env.MYSQL.password,
    password: process.env.MYSQL_PWD,
    database:process.env.MYSQL_PWD_DB
})

console.log('BD CONECTADA')
export {con}