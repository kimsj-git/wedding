import elegantLeafImg from "../assets/icons/elegant_leaf.png";

const FamilyMessage: React.FC<{}> = () => {
  const ourMessage: string[] = [
    "안녕하십니까,",
    "신랑 신희창, 신부 김서정 입니다.",
    "저희 두 사람이 한 가족이 되는 자리에 함께 하셔서 축복해주시면 더 없이 감사하겠습니다.",
  ];
  return (
    <div style={{ padding: "2rem", paddingBottom: "5rem" }}>
      <img src={elegantLeafImg} width="15%" style={{ padding: "1rem 0" }} />
      {ourMessage.map((line) => (
        <p style={{ textAlign: "center", wordBreak: "keep-all" }}>{line}</p>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>신한수 최미숙</p>
        <p style={{ marginLeft: "0.5rem",  marginBottom: "0.5rem" }}>의 장남</p>
        <p style={{ fontSize: "1.2rem", marginLeft: "1rem",marginBottom: "0.5rem" }}>희창</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "black",fontSize: "1.2rem", marginTop: "0.5rem" }}>김헌식 정명숙</p>
        <p style={{ marginLeft: "0.5rem",marginTop: "0.5rem" }}>의 장녀</p>
        <p style={{ fontSize: "1.2rem", marginLeft: "1rem",marginTop: "0.5rem" }}>서정</p>
      </div>
    </div>
  );
};

export default FamilyMessage;
