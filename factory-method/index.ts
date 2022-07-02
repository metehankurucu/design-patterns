import { RealProductFactory } from "./RealProductFactory";
import { User } from "./User";
import { VirtualProductFactory } from "./VirtualProductFactory";

(() => {
  const user = new User("John", "123 Main St.", "john@example.com");

  const virtualProductFactory = new VirtualProductFactory();
  const realProductFactory = new RealProductFactory();

  const virtualProduct = virtualProductFactory.createProduct("Stream Service");
  virtualProduct.deliver(user);

  const realProduct = realProductFactory.createProduct("Sun Glasses");
  realProduct.deliver(user);
})();
