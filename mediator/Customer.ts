import { Mediator } from "./Mediator";

export class Customer {
  name: string;
  mediator!: Mediator;

  constructor(name: string) {
    this.name = name;
  }

  setMediator = (mediator: Mediator) => {
    this.mediator = mediator;
  };

  makeOrder = (order: string) => {
    this.mediator.createOrder(order, this);
  };

  onCancelOrder = (order: string) => {
    console.log(`Message For ${this.name} : Order (${order}) is cancelled.`);
  };
}
