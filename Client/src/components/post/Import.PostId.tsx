import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreatPost from "./Import.CreatPost.tsx";
import "../../style/Import.PostId.css";
interface post {
  name: string;
  url_img: string;
  description: string;
  time: string;
  date: string;
}
export default function PostId() {
  const { id } = useParams();
  const [postid, setPostid] = useState<post | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function Postss() {
      try {
        const response = await fetch(`http://localhost:4000/post/${id}`);
        if (response.status != 201) {
          const data = await response.json();
          setPostid(data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    Postss();
  }, []);
  if (loading) return <div>טוען...</div>;
  if (postid) {
    return (
      <div id="postid">
        <CreatPost post={postid} />
      </div>
    );
  } else {
    return <div style={{ marginLeft: "40%" }}>"No posts to display"</div>;
  }
}
