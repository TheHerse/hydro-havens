import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadge from "@/components/TrustBadge";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // Add this

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <TrustBadge />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}