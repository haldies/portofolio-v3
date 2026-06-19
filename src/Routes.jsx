import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageAIEngineerShowcase from "./pages/homepage-ai-engineer-showcase";
import ContactCollaborationHub from "./pages/contact-collaboration-hub";
import ProjectDetailLLMMagangHub from "./pages/project-detail-llm-maganghub";
import FooterPage from "components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<HomepageAIEngineerShowcase />} />
          <Route path="/home" element={<HomepageAIEngineerShowcase />} />
          <Route path="/contact" element={<ContactCollaborationHub />} />
          <Route path="/projects/:projectId" element={<ProjectDetailLLMMagangHub />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
        <FooterPage />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
