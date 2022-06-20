import { City } from "./City";
import { District } from "./District";

(() => {
  const istanbul = new City(1, "Istanbul");

  const kadikoy = new District(2, "Kadikoy", 100_000);
  const besiktas = new District(3, "Besiktas", 200_000);
  //  and so on...

  istanbul.addRegion(kadikoy);
  istanbul.addRegion(besiktas);

  console.log("Istanbul Population: ", istanbul.getPopulation());
})();
