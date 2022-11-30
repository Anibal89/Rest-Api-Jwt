import {Sequelize} from "sequelize";

const db = new Sequelize('legacy','anibal','ReactJs100',{ //Conexion a Base de Datos
    host: "192.168.100.16",
    dialect: "mysql"
});

export default db;

