import Slogen from "./Slogan.tsx";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.tsx";
import "../../style/application-layout.css";
export default function Layout(props: any) {
  const navigate = useNavigate();
  return (
    <>
      <div id="title">
        <div className="spacer"></div>
        <Slogen />
        <div className="spacer"></div>
        <Logo />
      </div>
      <nav >
        <button id="home" onClick={()=>{navigate("/")}}>home</button>
      </nav>
      <div>{props.children}</div>
      
    </>
  );
}






