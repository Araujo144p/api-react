import MYSQL from 'mysql2/promise'

const con = await MYSQL.createConnection ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database:process.env.MYSQL_DB
})

console.log(`BD CONECTADA`)
export {con}