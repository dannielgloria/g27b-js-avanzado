import {getConnection} from "./../common/connection"

async function readAllProducts(response) {
    const connection = await getConnection();
    const resultado = await connection.query("SELECT * FROM products");
    return response.json(resultado)
}



export const methods = {
    readAllProducts
}