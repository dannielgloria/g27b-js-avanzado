import { Router } from "express";
import { methods as productController } from "../controllers/product.controller";

const router = Router()

// Uri inicial es http://127.0.0.1:4000/api-restful/products

/** Creamos nuestras rutas */
router.get("/allProducts", productController.getAllProducts); // GET http://127.0.0.1:4000/api-restful/products/allProducts
//C create
router.post("/newProduct", productController.postProduct); // POST http://127.0.0.1:4000/api-restful/products/newProduct
//R read
router.get("/productBySKU/:sku", productController.getProductBySku); // GET http://127.0.0.1:4000/api-restful/products/allProducts
export default router;