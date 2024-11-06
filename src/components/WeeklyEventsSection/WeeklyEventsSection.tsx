import classes from "./WeeklyEventsSection.module.css";
import data from "../../data/storeData.json";
import { useState } from "react";
import { getFormatColourModuleClassName, FORMATS } from "../../utils/utility";
import EventStoreCardModal from "../Modals/EventStoreCardModal";
import { Store } from "../Types/Types";

const weeklyData: {
  day: string;
  events: { format: string; stores: Store[] }[];
}[] = [
  { day: "SUN", events: [] },
  { day: "MON", events: [] },
  { day: "TUE", events: [] },
  { day: "WED", events: [] },
  { day: "THU", events: [] },
  { day: "FRI", events: [] },
  { day: "SAT", events: [] },
];

function getDayArrayIndex(day: string) {
  if (day === "SUN") return 0;
  if (day === "MON") return 1;
  if (day === "TUE") return 2;
  if (day === "WED") return 3;
  if (day === "THU") return 4;
  if (day === "FRI") return 5;
  if (day === "SAT") return 6;
  return 0;
}

const formats: string[] = FORMATS.map((format) => format.format);

function populateEvents() {
  data.forEach((storeData) => {
    storeData.weeklyEvents.forEach((event) => {
      const dayIndex: number = getDayArrayIndex(event.day);

      const eventIndex: number = weeklyData[dayIndex].events.findIndex(
        (eventData) => eventData.format === event.format
      );

      if (eventIndex === -1) {
        weeklyData[dayIndex].events.push({
          format: event.format,
          stores: [storeData],
        });
      } else {
        weeklyData[dayIndex].events[eventIndex].stores.push(storeData);
      }
    });
  });
}

populateEvents();

export default function WeeklyEventsSection() {
  const [filterFormats, setFilterFormats] = useState(["COMMANDER"]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [selectedStore, setSelectedStore] = useState<Store>();

  function toggleModal() {
    setShowModal(!showModal);
  }

  function filterStyle(filter: string) {
    if (filterFormats.includes(filter)) {
      return (
        getFormatColourModuleClassName(filter) + " " + classes.activeFilter
      );
    } else return getFormatColourModuleClassName(filter);
  }

  function filterFormatButton(filter: string) {
    if (filterFormats.includes(filter)) {
      setFilterFormats(filterFormats.filter((zone) => zone !== filter));
    } else {
      setFilterFormats((prevState) => [...prevState, filter]);
    }
  }



  return (
    <div style={{ paddingTop: "3rem", backgroundColor: "rgb(41, 41, 41)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "3rem",
          fontFamily: "'Protest Strike', sans-serif",
          fontWeight: "400",
          color: "white",
        }}
      >
        WEEKLY EVENTS
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.7rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {FORMATS.map((format) => (
          <button
            className={
              classes.filterFormatButton + " " + filterStyle(format.format)
            }
            onClick={() => filterFormatButton(format.format)}
          >
            {format.format}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "1.5rem",
        }}
      >
        <button
          className={classes.filterFormatButton + " " + classes.all}
          onClick={() => setFilterFormats([...formats])}
        >
          ALL
        </button>
        <button
          className={classes.filterFormatButton + " " + classes.all}
          onClick={() => setFilterFormats([""])}
        >
          CLEAR
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        <div className={classes.weeklyGrid}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            { selectedStore && <EventStoreCardModal open={showModal} onClose={toggleModal} store={selectedStore} />}
            {weeklyData.map((data) => (
              <div
                key={data.day}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: "800",
                  fontSize: "1.8rem",
                  padding: "1.5rem",
                  width: "calc(100%/7)",
                  textAlign: "center",
                  border: "1px solid black",
                }}
              >
                {data.day}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {weeklyData.map((data) => (
              <div
                key={data.day + "cell"}
                style={{
                  width: "calc(100%/7)",
                  textAlign: "center",
                  border: "1px solid black",
                  backgroundColor: "#e0e0e0",
                  minHeight: "5rem",
                }}
              >
                {data.events.map((storeEvent) => (
                  <div className={classes.weeklyFormat}>
                    <div
                      key={storeEvent.format + data.day}
                      style={{
                        display: filterFormats.includes(storeEvent.format)
                          ? ""
                          : "none",
                      }}
                    >
                      <div
                        className={
                          classes.formatCard +
                          " " +
                          getFormatColourModuleClassName(
                            storeEvent.format,
                            "title"
                          )
                        }
                      >
                        {storeEvent.format}
                      </div>
                      {storeEvent.stores.map((store) => (
                        <div
                          className={
                            classes.storeCard +
                            " " +
                            getFormatColourModuleClassName(
                              storeEvent.format,
                              "store"
                            )
                          }
                          onClick={() => {setSelectedStore(store); setShowModal(true);}}
                        >
                          {store.storeName}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
