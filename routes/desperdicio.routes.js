import express from "express";
import { methods as DesperdicioController } from "../controllers/desperdicio.controller.js";

const routerDes = express.Router();

routerDes.get("/", DesperdicioController.getListDes); 
routerDes.get("/getListDesperdicio", DesperdicioController.getListDesperdicio); 
routerDes.get("/getListDuro", DesperdicioController.getListMaterialDuro);
routerDes.get("/ListMaquina",DesperdicioController.getListMaquina);
routerDes.get("/ListMaterialesDes",DesperdicioController.getListMateriales);
routerDes.get("/ListMaterialesDuro",DesperdicioController.getListDuro); 
routerDes.post("/AddRegistroMaterial", DesperdicioController.addRegistroDesperdicio); 
routerDes.delete("/:Id_Detalle_Desperdicio", DesperdicioController.deleteListDesperdicio); 
routerDes.get("/ListTipodesperdicio", DesperdicioController.getTipoDes); 

// Mapeo de Tablas Individuales
routerDes.get("/ListBodega", DesperdicioController.getBodega); 
routerDes.get("/ListJornada", DesperdicioController.getJornada); 
routerDes.post("/AddRegistroDes", DesperdicioController.addRegistroDes); 

// Lista de Registro Detalle Desperdicio
routerDes.get("/ListRegDetalle", DesperdicioController.getRegistroDes); 

// Lista de Total General por Material
routerDes.get("/ListTotalDes", DesperdicioController.getTotalMaterialDes); 

//Desperdicio Total Por bodega
routerDes.get("/ListDesBodega", DesperdicioController.getTListBodegaDes);  

// Metodo Beta
routerDes.get("/ListZero", DesperdicioController.getZero);  

// Metodo para listar Material Duro
routerDes.get("/ListDetalleDuro", DesperdicioController.getListDuroMaterialDuro); 

routerDes.get("/ListTotalDuro", DesperdicioController.getTotalMaterialDro); 

//store
routerDes.post("/addregister", DesperdicioController.InsertRegistro); 

//Listar Reporte de Desperdicio
routerDes.get("/ListReportDesperdicio", DesperdicioController.getListDesperdicioReport); 

//getListDet
routerDes.get("/Detalle-registro/:Id_Registro_Detalle", DesperdicioController.getListDet);

export default routerDes;

