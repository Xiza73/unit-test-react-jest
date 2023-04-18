import { useEffect, useState } from "react";
import { Gif, IProps } from "../../utils/interfaces";
import { getGifs } from "../../services/giphy.service";
import { Button } from "../Button";
import { Separator } from "../Minimal";
import useFetchGifs from "../../hooks/useFetchGifs";

export interface CategoriesContainerProps extends IProps {}
export interface ListContainerProps {
  title: string;
}
export interface ListItemProps {
  url: string;
  alt: string;
}

export const CategoriesContainer = ({ children }: CategoriesContainerProps) => {
  return (
    <ol className="w-full lg:w-2/3 flex flex-col items-center justify-center gap-3">
      {children}
    </ol>
  );
};

export const ListContainer = ({ title }: ListContainerProps) => {
  const { gifs, loading, handleLoadMore, noMoreGifs } = useFetchGifs(title);

  return (
    <li className="w-full flex flex-col items-center justify-center gap-3 mb-2">
      <h2 className="text-2xl font-bold mr-auto">{title}</h2>
      <ol className="w-full flex items-center justify-between flex-wrap gap-5">
        {gifs.map((gif) => (
          <ListItem key={gif.id} url={gif.url} alt={gif.title} />
        ))}
      </ol>
      {noMoreGifs && (
        <p className="text-xl font-bold text-red-500">No hay más resultados</p>
      )}
      {!noMoreGifs && !loading && (
        <Button
          text="Cargar más"
          onClick={handleLoadMore}
          type="button"
          color="primary"
        />
      )}
      {loading && (
        <p className="text-xl font-bold text-blue-500">Cargando...</p>
      )}
      <Separator />
    </li>
  );
};

export const ListItem = ({ url, alt }: ListItemProps) => {
  return (
    <li className="w-52 p-2 bg-gray-200 rounded-md">
      <article className="flex items-center justify-center">
        <img src={url} alt={alt} className="w-full rounded-md" />
      </article>
    </li>
  );
};
