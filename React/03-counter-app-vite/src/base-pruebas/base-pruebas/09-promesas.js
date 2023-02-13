import { getHeroeById } from '/home/estefania/repositories/React/03-counter-app-vite/src/base-pruebas/base-pruebas/08-imp-exp.js'



 const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe '+ id );
            }
        }, 1000 )
    
    });


}


// getHeroeByIdAsync(1)
//     .then( console.log )
//     .catch( console.warn );

    export default getHeroeByIdAsync;