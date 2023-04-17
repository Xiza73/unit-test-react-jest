import { usContext } from "../../base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe de retornar un objeto", () => {
    const userTest = {
      nombreClave: "ABC",
      nombre: "Carlos",
      anios: 45,
      rango: "Capitán",
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const user = usContext({
      clave: userTest.nombreClave,
      nombre: userTest.nombre,
      edad: userTest.anios,
    });

    expect(user).toEqual(userTest);
  });
});
