/**
 * Consiste en pasar una función como parámetro a otra, para que la
 * segunda función la ejecuté cuando lo requiera.
 * Dicho de otra manera, es la programación la ejecución del código
 * dentro del callback.
 * 
 * Solución sencilla pero estéticamente compleja de leer y caótica.
 */

class Callback{
    ejecucion(){
        console.log('============== BLOQUE 3 ==============');

        const showSuccessMessage = ()=>{
            console.log("Proceso 3: Compra exitosa")
        }

        //Ejemplo de CallBack
        const validatePaymentCallback = (showSuccessMessage) =>{
            setTimeout(()=>{
                console.log("Proceso 2: Validando la tarjeta de credito");
                showSuccessMessage();
            }, 10000)
        }


        console.log('Proceso 1: Presiona el boton de comprar');
        validatePaymentCallback(showSuccessMessage);// este es un callback
        console.log('Proceso 4: Notificacion de mi amix');
    }
}

export default new Callback();