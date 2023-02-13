import { getHeroeById} from "../../src/base-pruebas/base-pruebas/08-imp-exp";

import { getHeroesByOwner} from "/home/estefania/repositories/React/03-counter-app-vite/src/base-pruebas/base-pruebas/08-imp-exp.js"

import heroes from "../../src/data/heroes";

describe('Pruebas EN 08-imp-exp', () => { 
 test('getHeroeById debe retornar un heroe por ID', () => { 

    const id=1;
    const hero= getHeroeById(id);
   
    expect(hero).toEqual(({id:1, name:'Batman', owner:'DC'}))

  });






  test('getHeroeById debe retornar undefine si no existe el  ID', () => { 

    const id=100;
    const hero= getHeroeById(id);
   
    //  console.log(hero);
    expect (hero).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 
    const owner='DC'; 
    const heroes= getHeroesByOwner(owner);
   
      console.log(heroes);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual( [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroes.filter(hero => hero.owner===owner));

  });

  test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => { 
    const owner='Marvel'
    const hero= getHeroesByOwner(owner);
   
      console.log(hero);
      expect(hero.length).toBe(2);
  });




 });