import { useRef } from "react";
import "./LetterForm.css";
import letterImg from "../assets/icons/letter.png";

const LetterForm: React.FC<{
  onAddLetter: (name: string, password: string, message: string) => void;
}> = (props) => {
  const letterNameInputRef = useRef<HTMLInputElement>(null);
  const letterPasswordInputRef = useRef<HTMLInputElement>(null);
  const letterMessageInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = letterNameInputRef.current!.value;
    const enteredPassword = letterPasswordInputRef.current!.value;
    const enteredMessage = letterMessageInputRef.current!.value;

    if (enteredName.trim().length === 0 || enteredMessage.trim().length === 0) {
      alert("모든 항목을 입력해주세요. 🙏");
      // throw new Error("Enter valid name and message");
    } else {
      props.onAddLetter(enteredName, enteredPassword, enteredMessage);
      letterNameInputRef.current!.value = "";
      letterPasswordInputRef.current!.value = "";
      letterMessageInputRef.current!.value = "";
    }
  };

  return (
    <div className="visitor-book">
      <div className="visitor-book-header">
        <img src={letterImg} />
        <p>방명록</p>
      </div>

      <form onSubmit={submitHandler}>
        <div className="visitor-book-form">
          <div className="input-box">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              className="input-tag"
              placeholder="이름을 입력해주세요"
              ref={letterNameInputRef}
            />
          </div>
          <div className="input-box">
            <label htmlFor="pw">비밀번호</label>
            <input
              type="password"
              id="pw"
              className="input-tag"
              placeholder="비밀번호를 입력해주세요"
              ref={letterPasswordInputRef}
            />
          </div>
          <div className="input-box">
            <label htmlFor="message">메시지</label>
            <textarea
              id="message"
              rows={3}
              cols={30}
              className="input-tag"
              placeholder="메시지를 입력해주세요"
              ref={letterMessageInputRef}
            ></textarea>
          </div>

          <button type="submit">방명록 남기기</button>
        </div>
      </form>
    </div>
  );
};

export default LetterForm;
