/**
 * BLOQUE 1 - Codigo sincrono
 * Una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */

class Sincronia{
    ejecucion() {
        console.log('============== BLOQUE 1 ==============');
        console.log('Primer proceso');
        console.log('Segundo proceso');
        console.log('Tercer proceso');
    }
}

export default new Sincronia();
