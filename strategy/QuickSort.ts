import SortStrategy from "./SortStrategy";

class QuickSort implements SortStrategy {
  sort(data: number[]): void {
    console.log("Data sorted using QuickSort algorithm.");
  }
}

export default QuickSort;
