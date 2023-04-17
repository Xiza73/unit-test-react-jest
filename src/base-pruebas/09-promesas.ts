import { Hero, getHeroById } from "./08-imp-exp";

export const getHeroeByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 1000);
  });
};
