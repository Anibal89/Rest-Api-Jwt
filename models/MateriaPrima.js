import { Sequelize }  from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const MateriaPrima = db.define('material_beta', {
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    rol:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Users;