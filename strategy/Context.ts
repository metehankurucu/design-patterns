import SortStrategy from "./SortStrategy";

class Context {
  private strategy: SortStrategy;

  constructor(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  public sortData(data: number[]) {
    this.strategy.sort(data);
  }
}

export default Context;
