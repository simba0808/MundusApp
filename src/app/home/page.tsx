import Header from "@/lib/components/layout/Header";
import Footer from "@/lib/components/layout/Footer";
import HeroSection from "@/lib/components/landing/HeroSection";
import RelevantSection from "@/lib/components/landing/RelevantSection";
import CustomSection from "@/lib/components/landing/CustomSection";

export default function HomePage() {
  const headerTrailing = (
    <div className="hidden md:block max-w-[40%] w-full md:order-1">
      <ul className="news-content flex justify-between font-semibold">
        <li>Home</li>
        <li>For you</li>
        <li>Sports</li>
        <li>Famous</li>
        <li>Prizes</li>
        <li>
          <b>...</b>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="">
      <Header hasSearch headerTrailing={headerTrailing} />
      <div>
        <HeroSection />
        <RelevantSection />
        <CustomSection />
      </div>
      <Footer />
    </div>
  );
}
