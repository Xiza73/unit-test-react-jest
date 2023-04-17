import fetch from "cross-fetch";

export const getImagen = async (index: number) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    const data: {
      sprites: {
        front_default: string;
      };
    } = (await resp.json()) as any;

    console.log(data);

    const url = data?.sprites?.front_default;

    return url;
  } catch (error) {
    console.log(error);
    return "No se encontró la imagen";
  }
};

getImagen(1);
