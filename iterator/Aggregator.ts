import { Iterator } from "./Iterator";

export interface Aggregator<T> {
  getIterator(): Iterator<T>;
}
