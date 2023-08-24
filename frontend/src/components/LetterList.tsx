import React from "react";
import Letter from "../models/letter";
import LetterItem from "./LetterItem";

const LetterList: React.FC<{
  items: Letter[];
  onDeleteLetter: (id: string) => void;
}> = (props) => {
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {props.items.map((item) => (
          <LetterItem
            key={item.id}
            item={item}
            onDeleteLetter={() => props.onDeleteLetter(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default LetterList;
