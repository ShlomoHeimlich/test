import { useEffect, useState } from "react";
import CreatPost from "./Import.CreatPost.tsx";
import "../../style/Import.All.Posts.css";
import { useNavigate } from "react-router-dom";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Data_returned, setData_returned] = useState(true);
  useEffect(() => {
    async function Postss() {
      try {
        const response = await fetch("http://localhost:4000/post");
        if (response.status === 201) {
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
        {posts.map((item, id) => (
          <button
            key={id}
            id="postbutton"
            onClick={() => {
              navigate(`/post/${id}`);
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
