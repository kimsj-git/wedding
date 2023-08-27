import { useEffect, useState } from "react";
import LetterList from "./components/LetterList";
import "./App.css";
import Letter from "./models/letter";
import LetterForm from "./components/LetterForm";

import green5 from "./assets/images/green_5.jpg";

import flowerImg from "./assets/icons/flower.png";

function App() {
  // const API_URL = "http://localhost:8200/board/"
  const API_URL = "http://wed_backend:8200/board/";
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

  const deleteLetterHandler = (id: number) => {
    alert();
    fetch(API_URL + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === 1) {
          setLetters((letters) => letters.filter((letter) => letter.id !== id));
        }
      });
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
