import "../../style/CreatPost.css";
interface post {
  name: string;
  url_img: string;
  description: string;
}
export default function CreatPost(props: { post: post }) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const getDate = now.getDate();
  const getMonth = now.getMonth();
  const getFullYear = now.getFullYear();
  const Time = `${hours}:${minutes}:${seconds}`;
  const date = `${getDate}/${getMonth}/${getFullYear}`;
  return (
    <div id="CreatPost">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{Time}</p>
          <p>{date}</p>
        </div>
        <p>{props.post.name}</p>
        <img src={props.post.url_img} alt="Badam's photo." />
        <p>{props.post.description}</p>
        <p>num of liks</p>
    </div>
  );
}
