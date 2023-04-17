import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(testUser);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const username = "Manuel";

    const testUser = {
      uid: "ABC567",
      username,
    };

    const user = getUsuarioActivo(username);

    expect(user).toEqual(testUser);
  });
});
