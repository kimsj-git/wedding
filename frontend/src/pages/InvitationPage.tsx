import Layout from "./Layout";
import FamilyMessage from "../components/FamilyMessage";

const InvitagionPage: React.FC = () => {
  return (
    <Layout>
      <div style={{ fontSize: "1.2rem" }}>
        <p style={{ color: "black", marginBottom: "0" }}>
          2023년 10월 21일 토요일 오후 12시
        </p>
        <p style={{ color: "black", fontSize: "1.4rem", margin: "0.5rem 0" }}>
          필경재 충효당
        </p>
      </div>
      <FamilyMessage />
    </Layout>
  );
};

export default InvitagionPage;
