/* 
  1. Inicialización
  2. Estimulo
  3. Observar el comportamiento
*/
test("Esta prueba no debe de fallar", () => {
  // 1. Inicialización
  const msg1 = "Hola Mundo";

  // 2. Estimulo
  const msg2 = msg1.trim();

  // 3. Observar el comportamiento
  expect(msg1).toBe(msg2);
});
