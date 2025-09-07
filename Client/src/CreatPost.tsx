import "../src/style/CreatPost.css";
interface post {
  name: string;
  url_img: string;
  description: string;
}
export default function CreatPost(props: { post: post }) {
    const formattedDateTime = new Date().toLocaleString();
  return (
    <div id="CreatPost">
      <p>{props.post.name}</p>
      <img src={props.post.url_img} alt="" />
      <p>{props.post.description}</p>
      <p>{formattedDateTime}</p>
      <p>num of liks</p>
    </div>
  );
}
