// import jwt from "jsonwebtoken";
// import Users from "../models/UserModel.js";

// export const adminOnly = async (req, res, next) =>{
//     const user = await Users.findOne({
//         where: {
//             uuid: req.session.userId
//         }
//     });
//     if(!Users) return res.status(404).json({msg: "User tidak ditemukan"});
//     if(Users.role !== "admin") return res.status(403).json({msg: "Akses terlarang"});
//     next();
// }