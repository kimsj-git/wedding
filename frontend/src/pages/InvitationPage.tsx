import Layout from "./Layout";
import Location from "../components/Location";
import FamilyMessage from "../components/FamilyMessage";

const InvitagionPage: React.FC<{}> = () => {
  return (
    <Layout>
      <FamilyMessage/>
      <Location/>
    </Layout>
  );
};

export default InvitagionPage;
