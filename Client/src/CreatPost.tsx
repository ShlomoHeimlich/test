import "../src/style/CreatPost.css"
interface post {
  name: string;
  url_img: string;
  description: string;
}
export default function CreatPost(props: { post: post }) {
  return (
    <div id="CreatPost">
      <p>{props.post.name}</p> 
      <img src={props.post.url_img} alt="" />
      <p>{new Date().getFullYear()}</p>
      <p>{props.post.description}</p>
      <p>num of liks</p>
    </div>
  );
}
