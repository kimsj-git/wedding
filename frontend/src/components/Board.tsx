import { useEffect, useState } from "react";
import LetterForm from "./LetterForm";
import LetterList from "./LetterList";
import Letter from "../models/letter";

const Board: React.FC = () => {
  const API_URL = "https://wedding.kimsj.dev/board/";
  const [letters, setLetters] = useState<Letter[]>([]);

  useEffect(() => {
    fetch(API_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const initLetters = data.map(
          (item: { id: number; name: string; content: string }) =>
            new Letter(item.id, item.name, item.content)
        );
        setLetters(initLetters);
      })
      .catch((err) => {
        console.error("Catch Error:", err);
      });
  }, []);

  const addLetterHandler = (
    name: string,
    password: string,
    message: string
  ) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        name: name,
        content: message,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newLetter = new Letter(data.id, data.name, data.content);
        setLetters((letters) => [newLetter, ...letters]);
      });
  };

  const deleteLetterHandler = (id: number, pw: string) => {
    fetch(API_URL + String(id), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        password: pw,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === true) {
          setLetters((letters) => letters.filter((letter) => letter.id !== id));
        } else {
          alert("비밀번호가 일치하지 않습니다. 🙅‍♀️")
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <LetterForm onAddLetter={addLetterHandler} />
      <LetterList items={letters} onDeleteLetter={deleteLetterHandler} />
    </div>
  );
};

export default Board;
