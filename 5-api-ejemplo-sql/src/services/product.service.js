import {getConnection} from "./../common/connection"

async function readAllProducts(response) {
    const connection = await getConnection();
    const resultado = await connection.query("SELECT * FROM products");
    return response.json(resultado)
}
/**
 * {
    "sku": 123456789,
    "name": "iPhone 15",
    "description": "El iPhone 15, resistente vidrio con infusión de color rosa, verde, azul, amarillo y negro. Sé de los primeros en adquirir el nuevo iPhone 15.",
    "price": 29000,
    "url_image": "https://articles-img.sftcdn.net/f_auto,t_article_cover_l/auto-mapping-folder/sites/2/2023/04/iPhone-15.jpg"
  }
 */


// C create
async function createProduct(sku, name, description,price,url_image,response) {
    if (sku === undefined || name === undefined || description === undefined || price === undefined || url_image=== undefined ) {
        return response.status(400).json({message:"Bad request, porfavor agrega todos los valores necesarios para añadir un producto nuevo"})
    }
        console.log("nuevo producto Servicio")
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO `products` (`sku`, `name`, `description`, `price`, `url_image`) VALUES (?, ?, ?, ?, ?);", [sku, name, description, price, url_image]);
        console.log(result)
        return response.json(result)
}

// R read
async function readProduct(body,response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM products WHERE sku=?",body.sku)
    return response.json(result)
}

// U update
async function readProduct(sku, name, description,price,url_image,response) {
    if ( name === undefined || description === undefined || price === undefined || url_image=== undefined ) {
        return response.status(400).json({message:"Bad request, porfavor agrega todos los valores necesarios para añadir un producto nuevo"})
    }
        const connection = await getConnection();
        const result = await connection.query("UPDATE products SET `name`=?, `description`=?, `price`=?, `url_image`=? WHERE sku=?", [ name, description, price, url_image, sku]);
        console.log(result)
        return response.json(result)
}

export const methods = {
    readAllProducts,
    createProduct,
    readProduct
}