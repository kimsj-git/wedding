import { Routes, Route } from "react-router-dom";
import InvitationPage from "./pages/InvitationPage";
import InformPage from "./pages/InformPage"
import FriendsPage from "./pages/FriendsPage";
import AnnouncePage from "./pages/AnnouncePage";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/invitation" element={<InvitationPage />} />
      <Route path="/inform" element={<InformPage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/" element={<AnnouncePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
