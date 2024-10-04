import { Product } from "@/entities/products";

interface ProductState {
  products: Product[];
}

type Subscriber = (state: ProductState) => void;

// Функция, создающая хранилище состояния
export const createProductStore = () => {
  let state: ProductState = {
    products: [],
  };

  let subscribers: Subscriber[] = [];

  // Подписка на изменения
  const subscribe = (callback: Subscriber): void => {
    subscribers.push(callback);
  };

  // Удаление подписки
  const unsubscribe = (callback: Subscriber): void => {
    subscribers = subscribers.filter((sub) => sub !== callback);
  };

  // Уведомление подписчиков
  const notify = (): void => {
    subscribers.forEach((sub) => sub(state));
  };

  // Обновление состояния
  const setState = (newState: Partial<ProductState>): void => {
    state = { ...state, ...newState };
    notify();
  };

  // Получение текущего состояния
  const getState = (): ProductState => state;

  return {
    subscribe,
    unsubscribe,
    setState,
    getState,
  };
};

// Экземпляр стора
export const productStore = createProductStore();
