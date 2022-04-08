import Singleton from "./Singleton";

(() => {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log(instance1 === instance2);
  // true
})();
