import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);




    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Estefania';
        const EnvioName = getUsuarioActivo(name);
        console.log(EnvioName);
        expect(EnvioName).toStrictEqual({
            uid: 'ABC567',
            username: name
        })

    });

});
