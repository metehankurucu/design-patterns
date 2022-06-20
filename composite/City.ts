import { Region } from "./Region";

export class City implements Region {
  regions: Region[];
  name: string;
  id: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.regions = [];
  }

  addRegion(region: Region) {
    this.regions.push(region);
  }

  removeRegion(region: Region) {
    this.regions = this.regions.filter((r) => r.id !== region.id);
  }

  getPopulation = () => {
    return this.regions.reduce(
      (acc, region) => acc + region.getPopulation(),
      0
    );
  };
}
