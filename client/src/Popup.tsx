import "@/Popup.css";

type PopupProps = {
  setPopupOpen: any;
  id: number | undefined;
}

const Popup = ({ setPopupOpen, id }: PopupProps) => {
  const handleSubmit = () => {
    setPopupOpen(false);
  }
  return(
    <div className="popup">
      <p>{id}</p>
      <form method="dialog">
        <button onClick={handleSubmit}>OK</button>
      </form>
    </div>
  );
}

export default Popup;