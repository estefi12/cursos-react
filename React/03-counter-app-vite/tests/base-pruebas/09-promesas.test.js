import getHeroeByIdAsync from "/home/estefania/repositories/React/03-counter-app-vite/src/base-pruebas/base-pruebas/09-promesas.js";
//done es 'esperar a que el codigo termine'
describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {


        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(
                    { id: 1,
                    name: 'Batman', 
                    owner: 'DC' }
                );

                done();
            })
    });

    test('getHeroeByIdAsync debe obtener un error si heroe no existe', (done) => {


        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy();
            done();
        })
        .catch(error=>{
           expect (error).toBe(`No se pudo encontrar el héroe ${id}`)
            done();
        })
    });

});