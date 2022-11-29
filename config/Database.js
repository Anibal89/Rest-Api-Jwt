import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db','root','Zazque96',{
    host: "localhost",
    dialect: "mysql"
});

export default db;