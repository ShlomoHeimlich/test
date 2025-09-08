import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreatPost from "./CreatPost.tsx";
interface post {
  name: string;
  url_img: string;
  description: string;
}
export default function PostId() {
  const { id } = useParams();
  const [postid, setPostid] = useState({})
  const [loading, setLoading] = useState(true);
  const [Data_returned, setData_returned] = useState(true);
  useEffect(() => {
    async function Postss() {
      try {
        const response = await fetch(`http://localhost:4000/post/${id}`);
        if (response.status === 201) {
          setData_returned(false);
        }
        const data = await response.json();
        setPostid(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    Postss();
  }, []);
  if (loading) return <div>טוען...</div>;
  if (Data_returned) {
    return (
      <div>
        <CreatPost post={postid}/>
      </div>
    );
  } else {
    return <div style={{ marginLeft: "40%" }}>"No posts to display"</div>;
  }

  return <a>{id}</a>;
}
