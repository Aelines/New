import { useState } from 'react';

interface UseHomePageHandlers {
  counter: number;
  handleIncrementCounter: () => void;
  handleDecrementCounter: () => void;
}
function useHomePageHandlers(start: number): UseHomePageHandlers {
  const [counter, setCounter] = useState(start);

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };
  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  };
  return {
    counter,
    handleIncrementCounter,
    handleDecrementCounter,
  };
}

export default useHomePageHandlers;
