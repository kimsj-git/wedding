import "./FamilyMessage.css";
import elegantLeafImg from "../assets/icons/elegant_leaf.png";
import FamilyInfo from "./FamilyInfo";

const FamilyMessage: React.FC<{}> = () => {
  const ourMessage: string[] = [
    "안녕하십니까,",
    "신랑 신희창, 신부 김서정 입니다.",
    "저희 두 사람이 한 가족이 되는 자리에 함께 하셔서 축복해주시면 더 없이 감사하겠습니다.",
  ];
  return (
    <div style={{ padding: "2rem", paddingBottom: "5rem" }}>
      <img src={elegantLeafImg} width="15%" style={{ padding: "1rem 0" }} />
      {ourMessage.map((line, index) => (
        <p key={index} style={{ textAlign: "center", wordBreak: "keep-all" }}>{line}</p>
      ))}
      <br></br>
      <FamilyInfo/>
    </div>
  );
};

export default FamilyMessage;
