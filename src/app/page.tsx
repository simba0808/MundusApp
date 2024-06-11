import Header from "@/lib/components/layout/Header";
import Footer from "@/lib/components/layout/Footer";
import HeroSection from "@/lib/components/landing/HeroSection";
import RelevantSection from "@/lib/components/landing/RelevantSection";
import CustomSection from "@/lib/components/landing/CustomSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div>
        <HeroSection />
        <RelevantSection />
        <CustomSection />
      </div>
      <Footer />
    </div>
  );
}
