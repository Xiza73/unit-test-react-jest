import { useEffect, useState } from "react";
import { Gif } from "../utils/interfaces";
import { getGifs } from "../services/giphy.service";

const limit = 8;

const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [noMoreGifs, setNoMoreGifs] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getGifs(category, { offset, limit })
      .then((items: Gif[]) => {
        if (items.length === 0) setNoMoreGifs(true);
        else setGifs([...gifs, ...items]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [category, offset]);
  
  const handleLoadMore = () => {
    setOffset(offset + 8);
  };

  return { gifs, loading, error, handleLoadMore, noMoreGifs };
};

export default useFetchGifs;
