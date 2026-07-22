import { Navigate, Route, Routes } from "react-router-dom";

import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import ApplicationPage from "./pages/ApplicationPage";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import ResourcesPage from "./pages/ResourcesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="/apply/:jobId" element={<ApplicationPage />} />
        <Route path="/professionals" element={<ProfessionalsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

