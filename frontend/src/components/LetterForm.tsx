import { useRef } from "react";

const LetterForm: React.FC<{
  onAddLetter: (name: string, password: string, message: string) => void;
}> = (props) => {
  const letterNameInputRef = useRef<HTMLInputElement>(null);
  const letterPasswordInputRef = useRef<HTMLInputElement>(null);
  const letterMessageInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = letterNameInputRef.current!.value;
    const enteredPassword = letterPasswordInputRef.current!.value;
    const enteredMessage = letterMessageInputRef.current!.value;

    if (enteredName.trim().length === 0 || enteredMessage.trim().length === 0) {
      letterNameInputRef.current!.value = "";
      letterMessageInputRef.current!.value = "";
      throw new Error("Enter valid name and message");
    }

    props.onAddLetter(enteredName, enteredPassword, enteredMessage);
    letterNameInputRef.current!.value = "";
    letterPasswordInputRef.current!.value = "";
    letterMessageInputRef.current!.value = "";
  };

  return (
    <div>
      <h2>방명록</h2>
      <form onSubmit={submitHandler}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="name">이름</label>
          <input type="text" id="name" ref={letterNameInputRef} />

          <label htmlFor="pw">비밀번호</label>
          <input type="password" id="pw" ref={letterPasswordInputRef} />

          <label htmlFor="message">메시지</label>
          <input type="text" id="message" ref={letterMessageInputRef} />

          <button type="submit">방명록 남기기</button>
        </div>
      </form>
    </div>
  );
};

export default LetterForm;
