import app from "./app"

/**
 * Inicializamos el servidor en un puerto especifico
 */
const main=()=>{
    app.listen(app.get("port"));
    console.log('Server on port:', app.get("port"));
}

main();