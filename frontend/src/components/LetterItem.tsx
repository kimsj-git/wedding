import Letter from "../models/letter";

const LetterItem: React.FC<{
  item: Letter;
  onDeleteLetter: (id: string) => void;
}> = (props) => {
  return (
    <div style={{ margin: "1rem" }}>
      <li
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "2px 2px 5px -2px grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem 1rem",
          }}
        >
          <p id="name">From: {props.item.name}</p>
          <button onClick={() => props.onDeleteLetter(props.item.id)}>
            삭제
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 1rem",
          }}
        >
          <p id="content">{props.item.message}</p>
        </div>
      </li>
    </div>
  );
};

export default LetterItem;
