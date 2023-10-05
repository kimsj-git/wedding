import Layout from "./Layout";
import GreetingMessage from "../components/GreetingMessage";

const AnnouncePage = () => {
  return (
    <Layout>
      <div style={{ fontSize: "1.2rem" }}>
        <p style={{ color: "black", marginBottom: "0" }}>
          2023년 10월 28일 토요일 오후 12시
        </p>
      </div>
      <GreetingMessage />
    </Layout>
  );
};

export default AnnouncePage;
