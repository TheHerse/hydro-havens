import type { Metadata } from "next";
import { Suspense } from "react";
import StatusDashboard from "./status-dashboard";
import "./status.css";

export const metadata: Metadata = {
  title: { absolute: "Project Status | Hydro Havens" },
  description: "Private Hydro Havens customer project status page.",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

function LoadingState() {
  return (
    <div className="status-card" aria-label="Loading project status">
      <div className="status-skeleton status-skeleton-heading" />
      <div className="status-skeleton status-skeleton-line" />
      <div className="status-skeleton status-skeleton-line short" />
    </div>
  );
}

export default function StatusPage() {
  return (
    <div className="status-page">
      <Suspense fallback={<main className="status-shell"><LoadingState /></main>}>
        <StatusDashboard />
      </Suspense>
    </div>
  );
}
