import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DonatePage from "./pages/DonatePage";
import MembershipPage from "./pages/MembershipPage";
import VolunteerPage from "./pages/VolunteerPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="volunteer" element={<VolunteerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
