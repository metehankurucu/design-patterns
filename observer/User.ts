import BlogPost from "./BlogPost";
import Observer from "./Observer";

class User implements Observer<BlogPost> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update = (data: BlogPost) => {
    console.log(
      `\n${this.name} is notified for new blog post ${data.title} authored by ${data.author.name}`
    );
  };
}

export default User;
