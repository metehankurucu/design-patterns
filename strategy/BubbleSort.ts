import SortStrategy from "./SortStrategy";

class BubbleSort implements SortStrategy {
  sort(data: number[]): void {
    console.log("Data sorted using BubbleSort algorithm.");
  }
}

export default BubbleSort;
