/**
 * Bloque 4 - Solucion asincrona por promesas 
 * ( Pending, Response (resolve, reject))
 */


class Promises{
    ejecucion(){
        console.log('============== BLOQUE 4 ==============');

        const validatePaymentPromise = () =>{
            return new Promise((resolve, reject)=>{
                console.log('2 Validando la tarjeta');
                setTimeout(()=>{
                    const statusArray = [200,500,404];
                    const randomResponse = statusArray[Math.floor(Math.random())];
                    if ( randomResponse === 200){
                        // 200 ok
                        console.log('Todo very very bien!! gasta tus ahorros')
                        resolve('Todo very very bien!! gasta tus ahorros')
                    } else if (randomResponse === 500) {
                        // 500 Internal server error
                        console.log('Corran se esta quemando el servidor!!! tiren todo')
                        reject('Corran se esta quemando el servidor!!! tiren todo')
                    } else {
                        // 404 no se encontro
                        console.log('Eso que me pediste no lo encontre joven!')
                        reject('Eso que me pediste no lo encontre joven!')
                    }
                }, 5000);
            }
            )
        }

        console.log('1 Presiona el boton de comprar')
        validatePaymentPromise()
            .then(response =>{
                console.log(response);
                console.log('3 Ver el mensaje de "gracias joven"');
            })
            .then(() => {
                console.log('4 Entregaremos el paquete N dia');
            })
            .catch((error) => {
                console.log('error: ', error);
            })
            .finally(() => {
                console.log("============== FINAL BLOQUE 4 ==============");
            });
            console.log("============== FINAL 4 ==============");
    }
}
export default new Promises();