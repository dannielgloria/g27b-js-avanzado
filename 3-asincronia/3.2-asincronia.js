/**
 * Un código asíncrono no espera a las instrucciones diferidas y continúa con
 * su ejecución. Entiéndase por instrucción diferida cualquier cosa que
 * implique un retraso. Esto evita que haya código bloqueante, el código
 * bloqueante se forma en la cola.
 */

class Asincornia{
    ejecucion(){
        console.log('============== BLOQUE 2 ==============');
        const validatePayment = () => {
            setTimeout(()=>{
                console.log("Proceso 2 (B2): Validando la tarjeta de credito");
            }, 1)
        }

        console.log("Proceso 1: Presiona el boton de comprar");
        validatePayment();
        console.log("Proceso 3: Compra exitosa");
    }
}

export default new Asincornia();