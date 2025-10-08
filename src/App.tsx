import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayouts";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
