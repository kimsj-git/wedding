import Letter from "../models/letter";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const LetterItem: React.FC<{
  item: Letter;
  onDeleteLetter: (id: number) => void;
}> = (props) => {
  return (
    <div style={{ margin: "1rem" }}>
      <li
        style={{
          backgroundColor: "#f9f9f9",
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
          <div>
            <IconButton onClick={() => props.onDeleteLetter(props.item.id)}>
              <DeleteIcon />
            </IconButton>
          </div>
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
