import express from "express";
import morgan from "morgan"

import productRoutes from "./routes/index.routes"
import { PORT } from "./common/constants";

const app = express();

/** Se setea el puerto en el que correra nuestro server */
app.set("port",PORT);

/** Aqui nosotros declaramos que hacemos uso de Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/** Importamos nuestras rutas de la API (endpoints) de products.routes */
/** http://127.0.0.1:4000/api-restful/products */
app.use("/api-restful/products", productRoutes);

export default app;