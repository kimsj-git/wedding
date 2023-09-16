import { useEffect, useState } from "react";
import Layout from "./Layout";
import GreetingMessage from "../components/GreetingMessage";
import Letter from "../models/letter";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";

const FriendsPage: React.FC<{}> = () => {
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
    <Layout>
      <GreetingMessage />
      <div style={{ backgroundColor: "rgba(254,255,234)" }}>
        <LetterForm onAddLetter={addLetterHandler} />
        <LetterList items={letters} onDeleteLetter={deleteLetterHandler} />
      </div>
    </Layout>
  );
};

export default FriendsPage;
