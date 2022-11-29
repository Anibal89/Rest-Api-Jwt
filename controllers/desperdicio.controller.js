import { Sequelize }  from "sequelize";
import db from "../config/Database.js";
// Inner Join de Tabla general de Material Desperdicio; 

const getListDesperdicio = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("Select r.Id_Detalle_Desperdicio, m.Numero_Maquina, r.Operador_Maquina, n.Nombre_Material_Desperdicio, t.Nombre_Tipo_Desperdicio, r.Cantidad_Desperdicio FROM Detalle_Desperdicio r INNER JOIN Maquina m ON m.Id_Maquina = r.Id_Maquina INNER JOIN Material_Desperdicio n ON n.Id_Material_Desperdicio = r.Id_Material_Desperdicio INNER JOIN Tipo_Desperdicio t ON t.Id_Tipo_Desperdicio = n.Id_Tipo_Desperdicio  Where t.Id_Tipo_Desperdicio = 2"); 
       /* const result = await connection.query("Select r.Id_Registro_Detalle, r.Id_Detalle_Desperdicio, m.Numero_Maquina, r.Operador_Maquina, n.Nombre_Material_Desperdicio, t.Nombre_Tipo_Desperdicio, r.Cantidad_Desperdicio FROM Detalle_Desperdicio r INNER JOIN Maquina m ON m.Id_Maquina = r.Id_Maquina INNER JOIN Material_Desperdicio n ON n.Id_Material_Desperdicio = r.Id_Material_Desperdicio INNER JOIN Tipo_Desperdicio t ON t.Id_Tipo_Desperdicio = n.Id_Tipo_Desperdicio Where t.Id_Tipo_Desperdicio = 2  GROUP BY Id_Detalle_Desperdicio ORDER BY Id_Registro_Detalle DESC")*/
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}; 

// Inner Join de Tabla general de Material Desperdicio

const getListMaterialDuro = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("Select r.Id_Detalle_Desperdicio, m.Numero_Maquina, r.Operador_Maquina, n.Nombre_Material_Desperdicio, t.Nombre_Tipo_Desperdicio, r.Cantidad_Desperdicio FROM Detalle_Desperdicio r INNER JOIN Maquina m ON m.Id_Maquina = r.Id_Maquina INNER JOIN Material_Desperdicio n ON n.Id_Material_Desperdicio = r.Id_Material_Desperdicio INNER JOIN Tipo_Desperdicio t ON t.Id_Tipo_Desperdicio = n.Id_Tipo_Desperdicio  Where t.Id_Tipo_Desperdicio = 1");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 
// Metodo para listar maquinas

const getListMaquina = async(req, res) => {

    try {
        const connection = await getConnection();
       /*  const result = await connection.query("SELECT m.Id_Maquina, m.Numero_Maquina FROM Registro_Desperdicio r INNER JOIN Maquina m ON m.Id_maquina = r.id_maquina"); */
       const result = await connection.query("select Id_Maquina, Numero_Maquina, Tipo_Maquina from Maquina");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 

// Listar tabla Materiales de desperdicio

const getListMateriales = async(req, res) => {

    try {
        const connection = await getConnection();
/*         const result = await connection.query("SELECT n.Id_Material_Desperdicio, n.Nombre_Material_Desperdicio FROM Registro_Desperdicio r INNER JOIN Material_Desperdicio n ON n.Id_Material_Desperdicio = r.Id_Material_Desperdicio"); */
        const result = await connection.query("select * from Material_Desperdicio where Id_Tipo_Desperdicio = 2");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 

const addRegistroDesperdicio = async(req, res) => {

    try {
        const {Id_Registro_Detalle, Id_Maquina, Id_Material_Desperdicio,Operador_Maquina,Cantidad_Desperdicio} = req.body;
        if(Id_Registro_Detalle == undefined ||Id_Maquina == undefined || Id_Material_Desperdicio == undefined ||Operador_Maquina == undefined || Cantidad_Desperdicio == undefined)
        {
            res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
        }
        const Registros={Id_Registro_Detalle,Id_Maquina, Id_Material_Desperdicio,Operador_Maquina,Cantidad_Desperdicio}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Detalle_Desperdicio SET ?", Registros)
        res.json([{message: "Registro Insertado"},result]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Mapeo de Datos Tipo De desperdicio

const getTipoDes = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("select Id_Tipo_Desperdicio, Nombre_Tipo_Desperdicio from Tipo_Desperdicio");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 

const getListDes = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("Select Id_Detalle_Desperdicio, Id_Maquina, Id_Material_Desperdicio, Operador_Maquina, Cantidad_Desperdicio FROM Detalle_Desperdicio");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 

//Eliminar Desperdicio

const deleteListDesperdicio = async(req, res) => {

    try {
        const{Id_Detalle_Desperdicio} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Detalle_Desperdicio WHERE Id_Detalle_Desperdicio = ?", Id_Detalle_Desperdicio);
        res.json([{message: "Eliminado"},result]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
};


//Listar Material duro de extrusion

const getListDuro = async(req, res) => {

    try {
        const connection = await getConnection();
/*         const result = await connection.query("SELECT n.Id_Material_Desperdicio, n.Nombre_Material_Desperdicio FROM Registro_Desperdicio r INNER JOIN Material_Desperdicio n ON n.Id_Material_Desperdicio = r.Id_Material_Desperdicio"); */
        const result = await connection.query("select * from Material_Desperdicio where Id_Tipo_Desperdicio = 1");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 



/*-----------------------------------------------Creacion de Metodos Nuevos Nueva base de Datos-----------------------------------------*/


//Listar Bodegas

const getBodega = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("select Id_Bodega, Numero_Bodega, Nombre_Bodega from Bodega");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 

// Listar Jornadas

const getJornada = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("select Id_Jornada, Nombre_Jornada from Jornada");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 

// Agrear Registro de desperdicios

const addRegistroDes = async(req, res) => {

    try {
        const {Id_Jornada,Total_Desperdicio_Extrusion,Id_Bodega,Fecha_Registro, Supervisor_Area} = req.body;
        if(Id_Jornada == undefined || Total_Desperdicio_Extrusion == undefined ||Id_Bodega == undefined || Fecha_Registro == undefined ||Supervisor_Area == undefined )
        {
            res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
        }
      /*   const Registros={Id_Jornada,Total_Desperdicio_Extrusion,Id_Bodega,Fecha_Registro, Supervisor_Area} */
        const connection = await getConnection();
  /*       const result = await connection.query("INSERT INTO Registro_Detalle SET ?", Registros) */
        const result = await connection.query("CALL insertar_registro_detalle (?,?,?,?,?)",[Id_Jornada,Total_Desperdicio_Extrusion,Id_Bodega,Fecha_Registro, Supervisor_Area]) 

        res.json([{message: "Registro Insertado"},result]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Listar Registro Detalle -- Uso del Order By

const getRegistroDes = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("select Id_Registro_Detalle, Correlativo, Id_Jornada, Total_Desperdicio_Extrusion, Id_Bodega,Fecha_Registro, Supervisor_Area from Registro_Detalle  ORDER BY Id_Registro_Detalle DESC LIMIT 1");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message); 
    }

}; 

// Listar Total Por Material

const getTotalMaterialDes = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("Select  d.Id_detalle_desperdicio as Id_Resumen_Detalle, n.Nombre_Material_Desperdicio, r.Fecha_Registro, sum(d.Cantidad_Desperdicio) as Total_Unitario FROM Detalle_Desperdicio d INNER JOIN registro_detalle r ON r.Id_Registro_Detalle = d.Id_Registro_Detalle INNER JOIN Material_Desperdicio n  ON  n.Id_Material_Desperdicio = d.Id_Material_Desperdicio where n.Id_Tipo_Desperdicio = 2 group by n.Nombre_Material_Desperdicio");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 


//Listar Total de Desperdicio Por bodega 


const getTListBodegaDes = async(req, res) => {

    try {
        const connection = await getConnection();
        /* const result = await connection.query("Select r.Id_registro_detalle as Id_Total_Bodega, m.Numero_Bodega, r.Total_Desperdicio_Extrusion From registro_detalle r INNER JOIN Bodega m  ON m.Id_Bodega = r.Id_Bodega group by Numero_Bodega"); */
        const result = await connection.query("Select r.Id_registro_detalle as Id_Total_Bodega, m.Numero_Bodega, r.Total_Desperdicio_Extrusion as Total From Detalle_Desperdicio d INNER JOIN registro_detalle r ON r.Id_Registro_Detalle = d.Id_Registro_Detalle INNER JOIN Bodega m  ON m.Id_Bodega = r.Id_Bodega group by Numero_Bodega");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};  

const getZero = async(req, res) => {

    try {
        const connection = await getConnection();
        /* const result = await connection.query("Select r.Id_registro_detalle as Id_Total_Bodega, m.Numero_Bodega, r.Total_Desperdicio_Extrusion From registro_detalle r INNER JOIN Bodega m  ON m.Id_Bodega = r.Id_Bodega group by Numero_Bodega"); */
        const result = await connection.query("select * from Material_Vista_Material");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};  


const getListDuroMaterialDuro = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("Select r.Id_Detalle_Desperdicio, m.Numero_Maquina, r.Operador_Maquina, n.Nombre_Material_Desperdicio, t.Nombre_Tipo_Desperdicio, r.Cantidad_Desperdicio FROM Detalle_Desperdicio r INNER JOIN Maquina m ON m.Id_Maquina = r.Id_Maquina INNER JOIN Material_Desperdicio n ON n.Id_Material_Desperdicio = r.Id_Material_Desperdicio INNER JOIN Tipo_Desperdicio t ON t.Id_Tipo_Desperdicio = n.Id_Tipo_Desperdicio  Where t.Id_Tipo_Desperdicio = 1");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 

const getTotalMaterialDro = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("Select d.Id_detalle_desperdicio as Id_Resumen_Detalle_Duro, n.Nombre_Material_Desperdicio, r.Fecha_Registro, sum(d.Cantidad_Desperdicio) as Total_Unitario_Duro FROM Detalle_Desperdicio d INNER JOIN registro_detalle r ON r.Id_Registro_Detalle = d.Id_Registro_Detalle INNER JOIN Material_Desperdicio n  ON  n.Id_Material_Desperdicio = d.Id_Material_Desperdicio where n.Id_Tipo_Desperdicio = 1 group by n.Nombre_Material_Desperdicio");
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

}; 


//InsertRegistro por procedure

const InsertRegistro = async(req, res) => {

    try {
        const {Nombre_Factura} = req.body;
        if(Nombre_Factura == undefined )
        {
            res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
        }
        const connection = await getConnection();
        const result = await connection.query('CALL correlativo(?)', [Nombre_Factura])
        res.json([{message: "Registro Insertado"},result]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Listar Registro desperdicio - desperdicils
const getListDesperdicioReport = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT r.Id_Registro_Detalle, r.Correlativo, r.Fecha_Registro, r.Total_Desperdicio_Extrusion, j.Nombre_Jornada, b.Id_Bodega, r.Supervisor_Area FROM Registro_Detalle r INNER JOIN Jornada j ON j.Id_Jornada = r.Id_Jornada INNER JOIN Bodega b ON b.Id_Bodega = r.Id_Bodega");
        res.json(result); 
    } catch (error) {
        res.status(500);  
        res.status(error.message);
    }

}; 

// Listar detalle de REgistro

const getListDet = async(req, res) => {

    try {
        const{ Id_Registro_Detalle  } = req.params;
        const connection = await getConnection();
       /*  const result = await connection.query("Select r.Id_Detalle_Desperdicio, m.Numero_Maquina, r.Operador_Maquina, n.Nombre_Material_Desperdicio, t.Nombre_Tipo_Desperdicio, r.Cantidad_Desperdicio FROM Detalle_Desperdicio r INNER JOIN Maquina m ON m.Id_Maquina = r.Id_Maquina INNER JOIN Material_Desperdicio n ON n.Id_Material_Desperdicio = r.Id_Material_Desperdicio INNER JOIN Tipo_Desperdicio t ON t.Id_Tipo_Desperdicio = n.Id_Tipo_Desperdicio WHERE r.Id_Registro_Detalle = ?", Id_Registro_Detalle ); */
       const result = await connection.query("SELECT r.Id_Registro_Detalle AS Id_R, d.Id_Detalle_Desperdicio AS Id_D, m.Numero_Maquina, n.Nombre_Material_Desperdicio, t.Nombre_Tipo_Desperdicio, d.Operador_Maquina, d.Cantidad_Desperdicio FROM Registro_Detalle r INNER JOIN Detalle_Desperdicio d ON d.Id_Registro_Detalle = r.Id_Registro_Detalle INNER JOIN Maquina m ON m.Id_Maquina = d.Id_Maquina INNER JOIN Material_Desperdicio n ON n.Id_Material_Desperdicio = d.Id_Material_Desperdicio  INNER JOIN Tipo_Desperdicio t ON t.Id_Tipo_Desperdicio = n.Id_Tipo_Desperdicio WHERE r.Id_Registro_Detalle = ?", Id_Registro_Detalle );
        res.json(result);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

//exportacion de metodos

export const methods = {
   getListDesperdicio,
   getListMaquina,
   getListMateriales,
   addRegistroDesperdicio,
   getListDes,
   deleteListDesperdicio,
   getTipoDes,
   getListDuro,
   getListMaterialDuro,

   //Metodos registro de Desperdicio
   getBodega,
   getJornada,
   addRegistroDes,
   getRegistroDes,
   getTotalMaterialDes,
   getTListBodegaDes ,
   getZero,

   //Metodos Registro Material Duro
   getListDuroMaterialDuro,
   getTotalMaterialDro,

   //Prueba de Procedimiento Almacenado

   InsertRegistro,

   // Metodo Para Listar Reportes
   getListDesperdicioReport,

   // Metodo para listar detalle por registro
   getListDet
};
