import elegantLeafImg from "../assets/icons/elegant_leaf.png";

const GreetingMessage: React.FC<{}> = () => {
  const ourMessage: string[] = [
    "안녕하십니까,",
    "신랑 신희창, 신부 김서정 입니다.",
    "저희 두 사람의 뜻에 따라 양가 직계 가족분들만 모시고 간소한 결혼식을 올리게 되었습니다.",
    "고마운 분들을 모시고 직접 인사를 드리지 못해 대단히 송구스럽게 생각하오며 마음으로 축하해주시면 감사드리겠습니다.",
    "앞으로 예쁘게 잘 사는 모습으로 보답하겠습니다.",
    "축의금은 정중히 사양하옵고, 마음만 감사히 받겠습니다.",
  ];
  return (
    <div style={{padding: "2rem", paddingBottom: "5rem"}}>
      <img src={elegantLeafImg} width="15%" style={{padding: "1rem 0"}} />
      {ourMessage.map((line, index) => (
        <p key={index} style={{ textAlign: "center", wordBreak: "keep-all" }}>{line}</p>
      ))}
    </div>
  );
};

export default GreetingMessage;
