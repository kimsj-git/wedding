const FamilyInfo: React.FC<{}> = () => {
  return (
    <>
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
    </>
  );
};

export default FamilyInfo;
