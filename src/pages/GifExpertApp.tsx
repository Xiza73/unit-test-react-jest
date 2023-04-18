import { useState } from "react";
import {
  Browser,
  CategoriesContainer,
  ListContainer,
} from "../components/GifExpertApp";
import { Separator, Title } from "../components";

export interface GifExpertAppProps {}

const initialCategories = ["One Punch", "Dragon Ball"];

export const GifExpertApp = ({}: GifExpertAppProps) => {
  const [categories, setCategories] = useState<string[]>(initialCategories);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddCategory = () => {
    if (inputValue.trim().length === 0) return;
    if (
      categories.includes(inputValue) ||
      categories.includes(inputValue.toLowerCase())
    ) {
      alert("La categoría ya existe");
      return;
    }
    setCategories([...categories, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <main className="w-full flex flex-col items-center justify-center p-4">
      <Title text="GifExpertApp" />
      <Separator className="lg:w-1/2" />
      <Browser
        buttonText="Agregar"
        onClick={handleAddCategory}
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={handleInputChange}
      />
      <CategoriesContainer>
        {categories.map((category, index) => (
          <ListContainer key={index} title={category} />
        ))}
      </CategoriesContainer>
    </main>
  );
};
