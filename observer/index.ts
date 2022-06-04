import Blog from "./Blog";
import User from "./User";

(() => {
  const john = new User("John");
  const rick = new User("Rick");
  const bella = new User("Bella");

  const blogOfBella = new Blog({ author: bella });

  blogOfBella.attach(rick);
  blogOfBella.attach(john);

  blogOfBella.createBlogPost({ title: "First Blog", content: "Lorem ipsum." });

  blogOfBella.detach(john);

  blogOfBella.createBlogPost({ title: "Second Blog", content: "Lorem ipsum." });
})();
