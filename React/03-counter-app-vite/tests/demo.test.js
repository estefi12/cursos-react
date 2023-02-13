
describe('Pruebas en <DemoComponent/>', () => {
  test('Esta prueba no puede fallar ', () => {
    //1.Inicializacion
    const message1 = 'Hola mundo';
    //2.Estimulo
    const message2 = message1.trim();
    //3. Observar el comportamiento... esperado
    expect(message1).toBe(message2);
  });
});




// https://jestjs.io/docs/expect
