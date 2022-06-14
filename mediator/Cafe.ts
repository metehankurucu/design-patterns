import { Mediator } from "./Mediator";

export class Cafe extends Mediator {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}
