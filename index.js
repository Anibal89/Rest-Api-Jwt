import express from "express";
import dotenv from "dotenv"
import db from './config/Database.js';
import router from "./routes/index.js";
dotenv.config();
const app = express();

try{
   await db.authenticate();
   console.log('Base de Datos Conectada...');

}catch(error){
    console.log(error);
}
app.use(express.json());
app.use(router);

app.listen(5000,()=> console.log('servidor corriendo en el puerto 5000'));
