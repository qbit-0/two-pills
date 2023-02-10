import "@/Popup.css";
import { useEffect } from "react";

type PopupProps = {
  setPopupOpen: any;
  id: number | undefined;
};

const Popup = ({ setPopupOpen, id }: PopupProps) => {
  const handleSubmit = () => {
    setPopupOpen(false);
  };

  /* this need to be removed and
      request has te be made upon submition of user input */
  useEffect(() => {
    fetch(`/api/boxes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link: "https://developer.mozilla.org/en-US/",
        label: "Study hard"
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="popup">
      <p>{id}</p>
      <form method="dialog">
        <button onClick={handleSubmit}>OK</button>
      </form>
    </div>
  );
};

export default Popup;
