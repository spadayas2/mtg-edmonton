import AboutSection from "../components/AboutSection/AboutSection";
import CurrentSets from "../components/CurrentSets/CurrentSets";
import HeaderHero from "../components/HeaderHero/HeaderHero";
import img from "../images/home-page-image.png";

function HomePage() {
  return (
    <>
      <HeaderHero secondTitle="Everything Magic: The Gathering related in Edmonton" imageURL={img} isHomePage={true}/>
      <main>
        <AboutSection />
        {/* <TradingSection/> */}
        <CurrentSets />
      </main>
    </>
  );
}

export default HomePage;
