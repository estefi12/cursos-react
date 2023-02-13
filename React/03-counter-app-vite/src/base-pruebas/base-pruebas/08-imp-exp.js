
import heroes from '/home/estefania/repositories/React/03-counter-app-vite/src/data/heroes.js';



export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );


export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );




