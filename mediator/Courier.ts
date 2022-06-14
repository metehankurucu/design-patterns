import { Mediator } from "./Mediator";

export class Courier {
  name: string;
  mediator!: Mediator;
  currentOrder: string | null = null;

  constructor(name: string) {
    this.name = name;
  }

  setMediator = (mediator: Mediator) => {
    this.mediator = mediator;
  };

  getOrder = (order: string) => {
    console.log(`Order: ${order} is delivering by ${this.name}`);
    this.currentOrder = order;
  };

  deliverOrder = () => {
    if (this.currentOrder === null) {
      console.log(`${this.name} has no order to deliver`);
      return;
    }

    this.mediator.onOrderDelivered(this, this.currentOrder);
    this.currentOrder = null;
  };
}
