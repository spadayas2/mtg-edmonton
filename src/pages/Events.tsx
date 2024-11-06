import FormatsSection from "../components/FormatsSection/FormatsSection";
import HeaderHero from "../components/HeaderHero/HeaderHero";
import WeeklyEventsSection from "../components/WeeklyEventsSection/WeeklyEventsSection";
import img from "../images/events-page-image.jpg";

function EventsPage() {
  return (
    <div>
      <HeaderHero
        title="Local Events"
        secondTitle="MTG events hosted by Edmonton stores"
        imageURL={img}
        isHomePage={false}
      />
      <main>
        <WeeklyEventsSection />
        <FormatsSection />
      </main>
    </div>
  );
}

export default EventsPage;
