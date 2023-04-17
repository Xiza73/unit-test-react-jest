import { getHeroById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("Test on 08-imp-exp.ts", () => {
  test("getHeroeById should return a hero by id", () => {
    const id = 1;
    const hero = getHeroById(id);

    const heroData = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };
    expect(hero).toEqual(heroData);
  });

  test("getHeroeById should return undefined if hero does not exist by id", () => {
    const id = 100;
    const hero = getHeroById(id);

    // expect(hero).toBe(undefined);
    expect(hero).toBeFalsy();
  });

  test("getHeroByOwner should return an array with DC heroes and length 3", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(expect.any(Array));
    expect(heroes).toContainEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroByOwner should return an array with Marvel heroes and length 2", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(expect.any(Array));
  });
});
