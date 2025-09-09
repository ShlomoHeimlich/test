import "../../style/Import.CreatPost.css";
interface post {
  name: string;
  url_img: string;
  description: string;
  time: string;
  date: string;
}
export default function CreatPost(props: { post: post }) {
  return (
    <div id="CreatPost">
      <div className="time-date">
        <p>{props.post.time}</p>
        <p>{props.post.date}</p>
      </div>
      <div id="content">
        <p className="p">{props.post.name}</p>
        <img src={props.post.url_img} alt="Badam's photo." />
        <p className="p">{props.post.description}</p>
        <input type="number" placeholder="    liks"/>
      </div>
    </div>
  );
}
