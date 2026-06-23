import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OldHomePage } from "./screens/OldHomePage";
import { ElveulPage } from "./screens/ElveulPage";
import { BrandedVitekPage } from "./screens/BrandedVitekPage";
import { Analytics } from "@vercel/analytics/next";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElveulPage />} />
        <Route path="/old" element={<OldHomePage />} />
        <Route path="/pavel-vitek" element={<BrandedVitekPage />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </StrictMode>,
);
