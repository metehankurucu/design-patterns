import { Cafe } from "./Cafe";
import { Courier } from "./Courier";
import { Customer } from "./Customer";

(() => {
  const customer1 = new Customer("User1");
  const customer2 = new Customer("User2");
  const customer3 = new Customer("User3");

  const courier1 = new Courier("Courier1");
  const courier2 = new Courier("Courier2");

  const cafe = new Cafe("Coffee Time");

  cafe.registerCustomer(customer1);
  cafe.registerCustomer(customer2);
  cafe.registerCustomer(customer3);

  cafe.registerCouirer(courier1);
  cafe.registerCouirer(courier2);

  customer1.makeOrder("Filter Coffee");
  customer2.makeOrder("Flat White");
  customer3.makeOrder("Americano");

  courier1.deliverOrder();

  customer3.makeOrder("Espresso");

  courier2.deliverOrder();

  customer1.makeOrder("Iced Latte");
  customer1.makeOrder("Iced Latte");

  courier1.deliverOrder();
  courier2.deliverOrder();
})();
