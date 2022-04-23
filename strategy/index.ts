import BubbleSort from "./BubbleSort";
import Context from "./Context";
import QuickSort from "./QuickSort";

(() => {
  const data = [2, 5, 1, 6, 3, 8, 5];
  const context = new Context(new BubbleSort());

  context.sortData(data);

  context.setStrategy(new QuickSort());

  context.sortData(data);
})();
