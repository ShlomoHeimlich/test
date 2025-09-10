import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/login.css";

export default function Register() {
  const [name, setname] = useState("");
  const [Password, setPassword] = useState("");
  const [success, setsuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = { name, Password };
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        setsuccess(true);
        navigate(`/`);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };
  return (
    <div>
      <div id="title">register</div>
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
        <div>If you are a registered user click here 👇</div>
        <button
          className="button"
          onClick={() => {
            navigate("/");
          }}
        >
          login
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
