import HeaderHero from "../components/HeaderHero/HeaderHero";
import StoresSection from "../components/StoresSection/StoresSection";
import SupportLocalStoresSection from "../components/SupportLocalStoresSection/SupportLocalStoresSection";
import img from "../images/stores-page-image.jpg";

export default function StoresPage() {
  return (
    <div>
      <HeaderHero
        title="Local Stores"
        secondTitle="Edmonton MTG stores"
        imageURL={img}
        isHomePage={false}
      />
      <main>
        <SupportLocalStoresSection />
        <StoresSection />
      </main>
    </div>
  );
}
