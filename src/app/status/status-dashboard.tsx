"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { contactEmail, displayPhone, phoneNumber } from "@/lib/seo";

const API_URL = process.env.NEXT_PUBLIC_HYDRO_HAVENS_STATUS_API_URL ?? "";
const PHASE_NAMES = [
  "Contract & Design",
  "Excavation",
  "Steel & Plumbing",
  "Shotcrete",
  "Tile & Coping",
  "Decking & Landscaping",
  "Interior Finish & Startup",
  "Final Walkthrough",
];

type Phase = { n: number; name: string; status: "completed" | "in_progress" | "upcoming" };
type Project = {
  label: string;
  status_badge: "Active Project" | "On Hold" | "Completed";
  overall_percent: number;
  phases: Phase[];
  update_note: string;
  updated_date: string;
  photo_data_url?: string | null;
};

const NOT_FOUND = "We couldn't find that project — please contact Hydro Havens.";

function currentPhaseName(project: Project | null) {
  return project?.phases.find((phase) => phase.status === "in_progress")?.name ?? "";
}

function ContactLinks() {
  return (
    <div className="status-contact">
      <span>Questions about your project?</span>
      <div><a href={`tel:${phoneNumber}`}>{displayPhone}</a><span aria-hidden="true"> · </span><a href={`mailto:${contactEmail}`}>Email Hydro Havens</a></div>
    </div>
  );
}

function StatusBrand() {
  return (
    <div className="status-brand-lockup">
      <Image src="/images/logo/logo-nav.webp" alt="" width={40} height={40} priority unoptimized />
      <span className="status-brand">HYDRO HAVENS</span>
    </div>
  );
}

function MessageCard({ children }: { children: React.ReactNode }) {
  return <main className="status-shell"><section className="status-card status-message"><StatusBrand /><p>{children}</p><ContactLinks /></section></main>;
}

export default function StatusDashboard() {
  const params = useSearchParams();
  const token = params.get("token")?.trim() ?? "";
  const [loadState, setLoadState] = useState<{ token: string; project: Project | null; failed: boolean }>({ token: "", project: null, failed: false });
  const project = loadState.token === token ? loadState.project : null;
  const failed = loadState.token === token && loadState.failed;
  const refreshProjectRef = useRef<(() => void) | null>(null);
  const photoRefreshAttempted = useRef(false);

  useEffect(() => {
    if (!token) return;
    let cancelled = false;
    let inFlight = false;
    let hasLoaded = false;
    let photoRefreshQueued = false;
    let activeController: AbortController | null = null;
    let loadedProject: Project | null = null;

    const load = async (includePhoto = false) => {
      if (inFlight) {
        if (includePhoto) photoRefreshQueued = true;
        return;
      }
      inFlight = true;
      const controller = new AbortController();
      activeController = controller;
      const timeout = window.setTimeout(() => controller.abort(), 12000);
      try {
        if (!API_URL) throw new Error("API unavailable");
        const endpoint = new URL(API_URL);
        endpoint.searchParams.set("token", token);
        if (includePhoto) endpoint.searchParams.set("include_photo", "1");
        const response = await fetch(endpoint, { method: "GET", cache: "no-store", signal: controller.signal, referrerPolicy: "no-referrer" });
        const result = await response.json() as { ok?: boolean; project?: Project };
        if (!response.ok || result.ok !== true || !result.project || !Array.isArray(result.project.phases)) throw new Error("Project unavailable");
        if (!cancelled) {
          hasLoaded = true;
          const phaseChanged = loadedProject !== null && currentPhaseName(loadedProject) !== currentPhaseName(result.project);
          const nextProject = includePhoto || loadedProject === null || phaseChanged
            ? result.project
            : { ...result.project, photo_data_url: loadedProject.photo_data_url };
          loadedProject = nextProject;
          setLoadState({ token, project: nextProject, failed: false });
          if (phaseChanged && !includePhoto) photoRefreshQueued = true;
        }
      } catch {
        if (!cancelled && !hasLoaded) setLoadState({ token, project: null, failed: true });
      } finally {
        window.clearTimeout(timeout);
        if (activeController === controller) activeController = null;
        inFlight = false;
        if (photoRefreshQueued && !cancelled) {
          photoRefreshQueued = false;
          void load(true);
        }
      }
    };

    refreshProjectRef.current = () => { void load(true); };
    void load(true);
    const refreshTimer = window.setInterval(() => { void load(); }, 60000);
    return () => {
      cancelled = true;
      refreshProjectRef.current = null;
      window.clearInterval(refreshTimer);
      activeController?.abort();
    };
  }, [token]);

  if (!token) {
    return <MessageCard>This page needs your private project link. Hydro Havens sends it to you when your project starts — check your email/texts, or contact us.</MessageCard>;
  }
  if (failed) return <MessageCard>{NOT_FOUND}</MessageCard>;
  if (!project) {
    return <main className="status-shell"><section className="status-card" aria-label="Loading project status" aria-busy="true"><StatusBrand /><div className="status-skeleton status-skeleton-heading" /><div className="status-skeleton status-skeleton-line" /><div className="status-skeleton status-skeleton-line short" /><div className="status-skeleton status-skeleton-block" /></section></main>;
  }

  const percent = Math.min(100, Math.max(0, Math.round(Number(project.overall_percent) || 0)));
  const badgeClass = project.status_badge === "Completed" ? "completed" : project.status_badge === "On Hold" ? "on-hold" : "active";
  const isComplete = project.status_badge === "Completed" || percent === 100;
  const phases = PHASE_NAMES.map((name, index) => {
    const phase = project.phases.find((item) => item.name === name) ?? { n: index + 1, name, status: "upcoming" as const };
    return isComplete ? { ...phase, status: "completed" as const } : phase;
  });
  const currentPhase = phases.find((phase) => phase.status === "in_progress")?.name;
  const heroImage = project.photo_data_url || "/images/pools/pool-hero.webp";

  return (
    <main className="status-shell">
      <article className="status-card">
        <header className="status-topline"><StatusBrand /><span className={`status-badge ${badgeClass}`}>{project.status_badge}</span></header>
        <section className="status-hero" aria-label="Hydro Havens pool project">
          <img
              key={heroImage.slice(0, 100)}
              src={heroImage}
              alt={`Your project during ${currentPhase || "construction"}`}
              className="status-hero-photo"
              onLoad={() => { if (project.photo_data_url) photoRefreshAttempted.current = false; }}
              onError={() => {
                if (!project.photo_data_url) return;
                if (photoRefreshAttempted.current) {
                  setLoadState((current) => current.token === token && current.project ? { ...current, project: { ...current.project, photo_data_url: "" } } : current);
                  return;
                }
                photoRefreshAttempted.current = true;
                setLoadState((current) => current.token === token && current.project ? { ...current, project: { ...current.project, photo_data_url: "" } } : current);
                refreshProjectRef.current?.();
              }}
            />
          <div className="status-hero-shade" aria-hidden="true" />
          <div className="status-hero-copy">
            <p className="status-eyebrow">CUSTOMER PROJECT DASHBOARD</p>
            <h1>Your Dream Pool<br />Is Taking Shape</h1>
            <p className="status-project-label">{project.label}</p>
          </div>
        </section>

        <section className="status-progress" aria-label={`Overall construction ${percent}%`}>
          <div className="status-section-heading"><h2>Overall construction</h2><strong>{percent}%</strong></div>
          <div className="status-track"><div className="status-fill" style={{ width: `${percent}%` }} /></div>
          <p>Progress updated by your project manager</p>
        </section>

        <section className="status-timeline">
          <h2>Construction timeline</h2>
          <ol>{phases.map((phase) => <li key={phase.n} className={`phase-${phase.status}`}>
            <span className="phase-number" aria-hidden="true">{phase.n}</span>
            <span className="phase-name">{phase.name}</span>
            {phase.status !== "upcoming" && <span className={`phase-pill ${phase.status}`}>{phase.status === "completed" ? "Completed" : "In Progress"}</span>}
          </li>)}</ol>
        </section>

        <section className="status-update"><h2>Latest project update</h2><p>{project.update_note || "Your project manager will share an update soon."}</p><time>{project.updated_date ? `Last updated ${project.updated_date}` : ""}</time></section>
        <footer className="status-footer"><ContactLinks /></footer>
      </article>
    </main>
  );
}
