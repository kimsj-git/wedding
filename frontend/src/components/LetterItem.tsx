import Letter from "../models/letter";

const LetterItem: React.FC<{ item: Letter; onDeleteLetter: (id: string) => void }> = (
  props
) => {
  return (
    <li>
      <p>이름: {props.item.name}</p>
      <p>내용: {props.item.message}</p>
      <button onClick={() => props.onDeleteLetter(props.item.id)}>Delete</button>
    </li>
  );
};

export default LetterItem;
