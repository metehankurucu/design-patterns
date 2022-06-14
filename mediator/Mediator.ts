import { Courier } from "./Courier";
import { Customer } from "./Customer";

export abstract class Mediator {
  private couriers: Courier[] = [];

  public registerCouirer = (courier: Courier) => {
    courier.setMediator(this);
    this.couriers.unshift(courier);
  };

  public registerCustomer = (customer: Customer) => {
    customer.setMediator(this);
  };

  public onOrderDelivered = (courier: Courier, order: string) => {
    console.log(`Order: ${order} is delivered by ${courier.name}`);
    this.couriers.unshift(courier);
  };

  public createOrder = (order: string, customer: Customer) => {
    if (this.couriers.length === 0) {
      customer.onCancelOrder(order);
      return;
    }

    const courier = this.couriers.pop();
    courier?.getOrder(order);
  };
}
