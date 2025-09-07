import { posts } from "./posts/post.ts";
import CreatPost from "./CreatPost";
import "../src/style/posts.css"
export default function Posts() {
  return (
    <div id="posts">
      {posts.map((item, index) => (
        <div key={index}>
          <CreatPost  post={item} />
        </div>
      ))}  
    </div>
  );
}
