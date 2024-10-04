import { useState, useEffect } from "react";

// Теперь хук принимает тип состояния T, что делает его универсальным
export const useReactifyStore = <T extends object>(store: {
  getState: () => T;
  subscribe: (callback: (state: T) => void) => void;
  unsubscribe: (callback: (state: T) => void) => void;
  setState: (newState: Partial<T>) => void;
}): [T, (newState: Partial<T>) => void] => {
  const [state, setState] = useState<T>(store.getState());

  useEffect(() => {
    const handleStoreChange = (newState: T) => {
      setState(newState);
    };

    // Подписываемся на изменения
    store.subscribe(handleStoreChange);

    // Отписываемся при размонтировании компонента
    return () => {
      store.unsubscribe(handleStoreChange);
    };
  }, [store]);

  return [state, store.setState];
};
