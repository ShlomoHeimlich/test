import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/login.css";

export default function Logoin() {
  const [name, setname] = useState("");
  const [Password, setPassword] = useState("");
  const [success, setsuccess] = useState(false);
  const [mistake, setmistake] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = { name, Password };
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response.status);
      if (response.status === 200) {
        setsuccess(true);
        navigate(`/app`);
      } else {
        setmistake(true);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };
  return (
    <div>
      <div id="title">login</div>
      {mistake && <div id="mistake">mistake</div>}
      <div id="form">
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your name."
          />
          <input
            required
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password."
          />
          <input id="sudmit" type="submit" value="Submit"></input>
        </form>
        <div>If you are not a registered user, click here 👇</div>
        <button
          className="button"
          onClick={() => {
            navigate("/register");
          }}
        >
          register
        </button>
        <div id="Customerupdate">
          {success ? (
            <div>Registration was successful.</div>
          ) : (
            <div id="Message_customer">Fill in the required fields.</div>
          )}
        </div>
      </div>
    </div>
  );
}
