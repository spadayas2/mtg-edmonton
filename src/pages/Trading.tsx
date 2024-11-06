import HeaderHero from "../components/HeaderHero/HeaderHero";
import ResearchSection from "../components/TradingInfoSection/TradingInfoSection";
import TradeSafelySection from "../components/TradeSafelySection/TradeSafelySection";
import img from "../images/trading-page-image.webp";

export default function TradingPage() {
  return (
    <div>
      <HeaderHero
        title="Trading and Selling"
        secondTitle="Trading and selling cards within Edmonton"
        imageURL={img}
        isHomePage={false}
      />
      <main>
        <TradeSafelySection />
        <ResearchSection />
      </main>
    </div>
  );
}
