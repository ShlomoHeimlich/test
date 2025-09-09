import { useState } from "react";
import "../../style/Creat.css";
export default function Creat() {
  const [name, setname] = useState("");
  const [url_img, seturl_img] = useState("");
  const [description, setdescription] = useState("");
  const [success, setsuccess] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const getDate = now.getDate();
    const getMonth = now.getMonth();
    const getFullYear = now.getFullYear();
    const time: string = `${hours}:${minutes}:${seconds}`;
    const date: string = `${getDate}/${getMonth}/${getFullYear}`;
    const formData = { name, url_img, description, time, date };
    try {
      const response = await fetch("http://localhost:4000/creatpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        setsuccess(true);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };
  return (
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
          type="text"
          onChange={(e) => seturl_img(e.target.value)}
          placeholder="Enter the URL of your image."
        />
        <input
          required
          type="text"
          onChange={(e) => setdescription(e.target.value)}
          placeholder="Enter your description."
        />
        <input type="submit" value="Submit Form"></input>
      </form>
      <div id="Customerupdate">
        {success ? (
          <div>The post was submitted successfully.</div>
        ) : (
          <div>Fill in all the details..</div>
        )}
      </div>
    </div>
  );
}
