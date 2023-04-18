import axios from "axios";
import { Gif } from "../utils/interfaces";
import { sleep } from "../utils/functions";

export const getGifs = async (
  category: string,
  options: {
    limit?: number;
    offset?: number;
  } = {}
): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${options.limit || 8}&offset=${options.offset || 0}&api_key=${
    import.meta.env.VITE_REACT_GIPHY_API_KEY
  }`;

  const { data } = await axios.get(url);
  await sleep(1.3);

  const gifs = data.data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
