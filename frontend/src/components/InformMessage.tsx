import elegantLeafImg from "../assets/icons/elegant_leaf.png";

const InformMessage: React.FC<{}> = () => {
  const ourMessage: string[] = [
    "안녕하십니까,",
    "신랑 신희창, 신부 김서정 입니다.",
    "저희 두 사람의 뜻에 따라 양가 직계 가족분들만 모시고 간소한 결혼식을 올리게 되었습니다.",
    "고마운 분들을 모시고 직접 인사를 드리지 못해 대단히 송구스럽게 생각하오며 멀리서 마음으로 축하해주시면 감사드리겠습니다. 앞으로 예쁘게 잘 사는 모습으로 보답하겠습니다.",
  ];
  return (
    <div style={{ padding: "2rem", paddingBottom: "5rem" }}>
      <img src={elegantLeafImg} width="15%" style={{ padding: "1rem 0" }} />
      {ourMessage.map((line) => (
        <p style={{ textAlign: "center", wordBreak: "keep-all" }}>{line}</p>
      ))}
      <div className="family-name">
        <p className="family-name__parents">신한수 최미숙</p>
        <p style={{ margin: "0 0 0 0.5rem" }}>의 장남</p>
        <p className="family-name__child">희창</p>
      </div>
      <div className="family-name">
        <p className="family-name__parents">김헌식 정명숙</p>
        <p style={{ margin: "0 0 0 0.5rem" }}>의 장녀</p>
        <p className="family-name__child">서정</p>
      </div>
    </div>
  );
};

export default InformMessage;
