import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("Test on 09-promesas.ts", () => {
  test("getHeroeByIdAsync should return a hero by id", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync should return an error if hero does not exist by id", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBe(undefined);
        done();
      })
      .catch((err) => {
        expect(err).toBe("No se pudo encontrar el héroe");
        done();
      });
  });
});
