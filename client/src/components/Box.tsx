type boxProps = {
  id: number;
  color: "red" | "blue";
  label: string;
  handleBoxClick: any;
};

const Box = ({ id, color, label, handleBoxClick }: boxProps) => {
  return (
    <button
      className={`box ${color}`}
      onClick={() => {
        handleBoxClick(id);
      }}
    >
      {label}
    </button>
  );
};

export default Box;
