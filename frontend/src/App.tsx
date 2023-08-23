import { useState } from "react";
import LetterList from "./components/LetterList";
import "./App.css";
import Letter from "./models/letter";
import LetterForm from "./components/LetterForm";

import green5 from "./assets/images/green_5.jpg";

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
      <h1>Wedding!</h1>
      <img src={green5} width="500px" />
      <LetterForm onAddLetter={addLetterHandler} />
      <LetterList items={letters} onDeleteLetter={deleteLetterHandler} />
    </>
  );
}

export default App;
