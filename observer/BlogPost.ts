import User from "./User";

class BlogPost {
  title: string;
  content: string;
  author: User;

  constructor({
    title,
    content,
    author,
  }: {
    title: string;
    content: string;
    author: User;
  }) {
    this.title = title;
    this.content = content;
    this.author = author;
  }
}

export default BlogPost;
