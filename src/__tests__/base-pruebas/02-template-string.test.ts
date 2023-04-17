import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('getSaludo debe de retornar "Hola Manuel"', () => {
    const name = "Manuel";
    const greeting = getSaludo(name);
    expect(greeting).toBe("Hola " + name);
  });
});
