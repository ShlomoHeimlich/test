import "../../style/Import.CreatPost.css";
interface Post {
  id: string;
  name: string;
  url_img: string;
  description: string;
  time: string;
  date: string;
  likes: string;
}
export default function CreatPost(props: { post: Post }) {
  return (
    <div id="CreatPost">
      <div className="time-date">
        <p>{props.post.time}</p>

        <p>{props.post.date}</p>
      </div>
      <div id="content">
        <p className="p">{props.post.name}</p>
        <img src={props.post.url_img} alt="input image" />
        <p className="p">{props.post.description}</p>
        <p>{props.post.likes}</p>
      </div>
    </div>
  );
}
