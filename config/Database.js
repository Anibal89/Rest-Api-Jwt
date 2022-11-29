import {Sequelize} from "sequelize";

const db = new Sequelize('legacy','anibal','ReactJs100',{
    host: "192.168.100.16",
    dialect: "mysql"
});

export default db;

