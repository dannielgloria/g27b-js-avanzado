import { methods as productServices } from "../services/product.service";

const getAllProducts = async (req, res)=>{
    try {
        const sentencia = await productServices.readAllProducts(res); //PIDE INFORMACION A LA BASE DE DATOS PARA TRAER TODOS LOS PRODUCTOS MEDIANTE UN SERVICIO
        return sentencia
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

export const methods = {
    getAllProducts
}