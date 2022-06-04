import Observer from "./Observer";

interface Observable<T> {
  observers: Set<Observer<T>>;
  attach: (observer: Observer<T>) => void;
  detach: (observer: Observer<T>) => void;
  notify(data: T): void;
}

export default Observable;
