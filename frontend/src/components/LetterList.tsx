import React from "react";
import Letter from "../models/letter";
import LetterItem from "./LetterItem";

const LetterList: React.FC<{
  items: Letter[];
  onDeleteLetter: (id: number, pw: string) => void;
}> = (props) => {
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {props.items.map((item) => (
          <LetterItem
            key={item.id}
            item={item}
            onDeleteLetter={props.onDeleteLetter}
          />
        ))}
      </ul>
    </div>
  );
};

export default LetterList;
