import "@/Popup.css";
import { useState } from "react";

type PopupProps = {
  setPopupOpen: any;
  id: number | undefined;
};
/* input validation is needed 
  handle empty input
  invalid input using regex*/
const Popup = ({ setPopupOpen, id }: PopupProps) => {
  const [link, setLink] = useState<string>();
  const [label, setLabel] = useState<string>();

  const handleSubmit = () => {
    setPopupOpen(false);
    fetch(`/api/boxes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link,
        label,
      }),
    })
      .then((res) => res.json())
      // show this link to the user with animation
      .then((data) => console.log(data));
  };

  const handleCancel = () => {
    setPopupOpen(false);
  };

  const handleInputChange = (e: any) => {
    if (e.target.id == "label") {
      setLabel(e.target.value);
    } else if (e.target.id == "link") {
      setLink(e.target.value);
    }
  };

  return (
    <div className="popup">
      <h1>Provide a label and a link for the next person</h1>
      <h2>You will get the current link after you submit the form</h2>
      <form onChange={handleInputChange} className="dialog">
        <label>Label: </label>
        <input
          type="text"
          name="label"
          id="label"
          placeholder="My favorite search engine"
        />
        <label>Link: </label>
        <input
          type="text"
          name="link"
          id="link"
          placeholder="https://www.google.com/"
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default Popup;
