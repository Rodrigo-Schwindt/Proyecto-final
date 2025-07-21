import mongoose from "mongoose";
import { calzadosModel } from "../../schemes/calzados.js";

const connectionMongoDB = process.env.MONGODB;

mongoose.connect(connectionMongoDB)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error("Error al conectar a MongoDB:", error));

export class Calzados {
    static async GetCalzados(){
        const response = await calzadosModel.find({});
        return response;
    }

    static async GetCalzadosForID(id){
        // const result = await GetCalzadosForID(id)
    }

    static async CreateCalzados(data){
        const calzado = new calzadosModel(data);
        const response = await calzado.save();
        return response;
    }
    static async UpdateCalzados(data, id){
        // const result = await UpdateCalzados(data, id)
    }
    static async ReplaceCalzados(data, id){
    //     const result = await ReplaceCalzados(data, id)
    }
    static async DeleteCalzados(id){
    //    const result = await DeleteCalzados(id)
    }
}