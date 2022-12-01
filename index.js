import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import db from './config/Database.js';
import router from "./routes/index.js";

dotenv.config();

const app = express();
app.listen(5000,()=> console.log('servidor corriendo en el puerto 5000'));

try{
   await db.authenticate();
   console.log('Base de Datos Conectada...');
} catch(error){
    console.log(error);
}

app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:5173'
}));


app.use(cookieParser());
app.use(express.json());


app.use(router);


