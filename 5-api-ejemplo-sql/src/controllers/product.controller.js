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

// C create es un vervo post en una API restful
const postProduct = async (req, res)=>{
    try {
        const {sku, name, description,price,url_image} = req.body;
        console.log("nuevo producto COntrolador")
        const query= await productServices.createProduct(sku, name, description,price,url_image,res)
        console.log(query)
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

export const methods = {
    getAllProducts,
    postProduct
}