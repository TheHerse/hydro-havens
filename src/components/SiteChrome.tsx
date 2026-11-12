"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navbar";
import Tracking from "@/components/Tracking";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPrivateStatusPage = pathname === "/status" || pathname === "/status/";

  if (isPrivateStatusPage) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      <Navigation />
      <main id="main-content">{children}</main>
      <Tracking />
      <Footer />
    </>
  );
}
