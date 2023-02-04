import "reflect-metadata"
const {DataSource} = require("typeorm")

const {HOST,USER,PORT,PASSWORD} = process.env

const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USER,
    password: PASSWORD,
    database: "devs-corner",
    entities: [],
    synchronize: true,
    logging: true,
})

module.exports = AppDataSource