import BlogPost from "./BlogPost";
import Observable from "./Observable";
import Observer from "./Observer";
import User from "./User";

class Blog implements Observable<BlogPost> {
  author: User;
  observers: Set<Observer<BlogPost>>;

  constructor({ author }: { author: User }) {
    this.author = author;
    this.observers = new Set();
  }

  createBlogPost = ({ title, content }: { title: string; content: string }) => {
    const newPost = new BlogPost({ title, content, author: this.author });
    this.notify(newPost);
  };

  attach = (observer: Observer<BlogPost>) => {
    this.observers.add(observer);
  };

  detach = (observer: Observer<BlogPost>) => {
    this.observers.delete(observer);
  };

  notify(data: BlogPost): void {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

export default Blog;
