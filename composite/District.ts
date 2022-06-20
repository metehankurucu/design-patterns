import { Region } from "./Region";

export class District implements Region {
  id: number;
  name: string;
  population: number;

  constructor(id: number, name: string, population: number) {
    this.id = id;
    this.name = name;
    this.population = population;
  }

  getPopulation = () => {
    return this.population;
  };
}
