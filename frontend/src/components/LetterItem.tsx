import Letter from "../models/letter";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal } from "@mui/material";
import { useRef, useState } from "react";

const LetterItem: React.FC<{
  item: Letter;
  onDeleteLetter: (id: number, pw: string) => void;
}> = (props) => {
  const pwInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const deleteBtnHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const deleteSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredPw = pwInputRef.current!.value;
    props.onDeleteLetter(props.item.id, enteredPw);
  };

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
            <IconButton onClick={deleteBtnHandler}>
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
      <Modal open={isOpen} onClose={() => setIsOpen(false)} disableAutoFocus>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "honeydew",
            padding: "2rem",
            borderRadius: "1rem"
          }}
        >
          <form onSubmit={deleteSubmitHandler}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label htmlFor="deletepw">비밀번호</label>
              <input type="password" id="deletepw" ref={pwInputRef} />
              <br></br>
              <button type="submit">삭제</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LetterItem;
