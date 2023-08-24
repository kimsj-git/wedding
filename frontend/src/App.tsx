import { useState } from "react";
import LetterList from "./components/LetterList";
import "./App.css";
import Letter from "./models/letter";
import LetterForm from "./components/LetterForm";

import green5 from "./assets/images/green_5.jpg";

import flowerImg from "./assets/icons/flower.png";

function App() {
  const [letters, setLetters] = useState<Letter[]>([]);

  const addLetterHandler = (
    name: string,
    password: string,
    message: string
  ) => {
    const newLetter = new Letter(name, password, message);
    setLetters((letters) => letters.concat(newLetter));
  };

  const deleteLetterHandler = (id: string) => {
    setLetters((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="header-text">
        <img src={flowerImg} width="15%" />
        <p>신희창</p>
        <p>김서정</p>
        <p>결혼합니다</p>
      </div>
      <img src={green5} width="100%" />
      <div style={{ backgroundColor: "rgba(254,255,234)" }}>
        <LetterForm onAddLetter={addLetterHandler} />
        <LetterList items={letters} onDeleteLetter={deleteLetterHandler} />
      </div>
    </>
  );
}

export default App;
