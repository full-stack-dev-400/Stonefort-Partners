import AboutHero from "@/components/About/AboutHero";
import TrustedBroker from "@/components/About/TrustedBroker";
import HistorySection from "@/components/About/HistorySection";

export default function AboutPage() {
  return (
    <>
      <AboutHero backgroundUrl="/images/aboutBG.webp" />
      <TrustedBroker />
      <HistorySection />
    </>
  );
}
