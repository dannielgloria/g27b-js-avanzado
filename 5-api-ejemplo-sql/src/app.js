import express from "express";
import morgan from "morgan"

import productRoutes from "./routes/index.routes"

const app = express();

/** Se setea el puerto en el que correra nuestro server */
app.set("port",4000);

/** Aqui nosotros declaramos que hacemos uso de Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/** Importamos nuestras rutas de la API (endpoints) de products.routes */
app.use("/api-restful/products", productRoutes);

export default app;