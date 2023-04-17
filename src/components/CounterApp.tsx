import { useState } from "react";

export interface CounterAppProps {
  value?: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {
  const [counter, setCounter] = useState(value || 0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value || 0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-</button>
    </>
  );
};
