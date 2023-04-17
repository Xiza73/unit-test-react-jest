import { getImagen } from "../../base-pruebas/11-async-await";

describe("Test on 11-async-await.ts", () => {
  test("getImagen should return an image url", async () => {
    const id = 1;
    const url = await getImagen(id);
    expect(url).toEqual(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    );
  });

  test("getImagen should return an error if hero does not exist by id", async () => {
    const id = 3000;
    const url = await getImagen(id);
    expect(url).toBe("No se encontró la imagen");
  });
});
