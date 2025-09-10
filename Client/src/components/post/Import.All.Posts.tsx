import { useEffect, useState } from "react";
import CreatPost from "./Import.CreatPost.tsx";
import "../../style/Import.All.Posts.css";
import { useNavigate } from "react-router-dom";
interface post {
  id: string;
  name: string;
  url_img: string;
  description: string;
  time: string;
  date: string;
  likes: string;
}
export default function Posts() {
  const [posts, setPosts] = useState<post[]>([]);
  const [loading, setLoading] = useState(true);
  const [Data_returned, setData_returned] = useState(true);
  useEffect(() => {
    async function Postss() {
      try {
        const response = await fetch("http://localhost:4000/app/post");
        if (response.status === 401) {
          setData_returned(false);
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    Postss();
  }, []);
  const navigate = useNavigate();
  if (loading) return <div>טוען...</div>;
  if (Data_returned) {
    return (
      <div id="posts">
        {posts.map((item) => (
          <button
            key={item.id}
            id="postbutton"
            onClick={() => {
              navigate(`/post/${item.id}`);
            }}
          >
            <CreatPost post={item} />
          </button>
        ))}
      </div>
    );
  } else {
    return <div style={{ marginLeft: "40%" }}>"No posts to display"</div>;
  }
}
