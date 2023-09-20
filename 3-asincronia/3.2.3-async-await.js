/**
 * Bloque 5 - Solucion asincrona por Async await
 */


class Async{
    ejecucion(){
        console.log('============== BLOQUE 5 ==============');

        const validatePaymentPromise = () =>{
            return new Promise((resolve, reject)=>{
                console.log('2 Validando la tarjeta');
                setTimeout(()=>{
                    const statusArray = [200,500];
                    const randomResponse = statusArray[Math.floor(Math.random())];
                    if ( randomResponse === 200){
                        // 200 ok
                        resolve('Todo very very bien!! gasta tus ahorros')
                        console.log('Todo very very bien!! gasta tus ahorros')
                    } else {
                        // 500 no se encontro
                        reject('Eso que me pediste no lo encontre joven!')
                        console.log('Eso que me pediste no lo encontre joven!')
                    }
                }, 5000);
            }
            )
        }

        async function main(){
            console.log('1 Presiona el boton boton de comprar');

            try {
                await validatePaymentPromise();
                console.log('3 Ver el mensaje de "gracias joven"');
                console.log('4 Entregaremos el paquete cuando este sea enviado');
            } catch (error) {
                console.log('Error: ',error)
            }
            console.log("============== FINAL ==============");
            console.log("============== FINAL 5 ==============");
        }

        main()
    }
}
export default new Async();