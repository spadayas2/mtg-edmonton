import styles from "./WeeklyEventsSection.module.css";
import { SetStateAction, useEffect, useState } from "react";
import { getFormatColourModuleClassName, FORMATS } from "../../utils/utility";
import { WizardsStoreEvent } from "../Types/Types";
import moment from "moment";
import { findFormatInTags, getStoreEventData } from "../../utils/wizardsAPI";
import StoreDetails from "../StoreDetails/StoreDetails";

interface WeeklyData {
  day: string;
  events: {
    format: string;
    stores: {
      storeName: string;
      address: string;
      website: string;
      phoneNumber: string;
      description: string;
    }[];
  }[];
}

const initialWeeklyData: WeeklyData[] = [
  { day: "SUN", events: [] },
  { day: "MON", events: [] },
  { day: "TUE", events: [] },
  { day: "WED", events: [] },
  { day: "THU", events: [] },
  { day: "FRI", events: [] },
  { day: "SAT", events: [] },
];

const formats: string[] = FORMATS.map((format) => format.format);

export default function WeeklyEventsSection() {
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>(initialWeeklyData);
  const [filterFormats, setFilterFormats] = useState(["COMMANDER"]);
  const [selectedStore, setSelectedStore] = useState<{
    storeName: string;
    address: string;
    website: string;
    phoneNumber: string;
    description: string;
  } | null>(null); // State to manage the selected store
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal visibility

  useEffect(() => {
    async function fetchData() {
      const data = await getStoreEventData(
        moment().startOf("week").format("YYYY-MM-DD"),
        moment().endOf("week").add(1).format("YYYY-MM-DD")
      );
      populateEvents(data);
    }
    fetchData();
  }, []);

  function populateEvents(storesData: WizardsStoreEvent[]) {
    const newData: WeeklyData[] = initialWeeklyData.map(day => ({ ...day, events: [] }));
    storesData.forEach((storeData) => {
      let format = findFormatInTags(storeData.tags);
      if (format === undefined) format = "OTHER";
      const dayIndex = moment(storeData.scheduledStartTime).day();
      const eventIndex = newData[dayIndex].events.findIndex(
        (eventData) => eventData.format === format
      );
      if (format !== undefined) {
        if (eventIndex === -1) {
          newData[dayIndex].events.push({
            format: format,
            stores: [
              {
                storeName: storeData.organization.name,
                address: storeData.organization.postalAddress,
                phoneNumber: storeData.phoneNumber,
                website: storeData.organization.website || "",
                description: storeData.description
              },
            ],
          });
        } else {
          const storeExists = newData[dayIndex].events[eventIndex].stores.some(
            (store) => store.storeName === storeData.organization.name
          );
          if (!storeExists) {
            newData[dayIndex].events[eventIndex].stores.push({
              storeName: storeData.organization.name,
              address: storeData.organization.postalAddress,
              phoneNumber: storeData.phoneNumber,
              website: storeData.organization.website || "",
              description: storeData.description
            });
          }
        }
      }
    });
    setWeeklyData(newData);
  }

  function filterStyle(filter: string) {
    if (filterFormats.includes(filter)) {
      return getFormatColourModuleClassName(filter) + " " + styles.activeFilter;
    } else return getFormatColourModuleClassName(filter);
  }

  function filterFormatButton(filter: string) {
    if (filterFormats.includes(filter)) {
      setFilterFormats(filterFormats.filter((zone) => zone !== filter));
    } else {
      setFilterFormats((prevState) => [...prevState, filter]);
    }
  }

  function handleDetailsClick(
    storeData: SetStateAction<{
      storeName: string;
      address: string;
      website: string;
      phoneNumber: string;
      description: string;
    } | null>
  ) {
    setSelectedStore(storeData);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedStore(null);
  }

  const begginingOfCurrentWeek = moment().startOf("week");

  return (
    <div className={styles.container}>
      <div className={styles.title}>WEEKLY EVENTS</div>

      <div className={styles.flexCenter}>
        <div className={styles.containerFilterButtons}>
          {FORMATS.map((format) => (
            <button
              key={format.format}
              className={
                styles.filterFormatButton + " " + filterStyle(format.format)
              }
              onClick={() => filterFormatButton(format.format)}
            >
              {format.format}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.containerFilterButtons}>
        <button
          className={styles.filterFormatButton + " " + styles.all}
          onClick={() => setFilterFormats([...formats])}
        >
          ALL
        </button>
        <button
          className={styles.filterFormatButton + " " + styles.all}
          onClick={() => setFilterFormats([""])}
        >
          CLEAR
        </button>
      </div>
      <div className={styles.containerWeekklyEvents}>
        <div className={styles.weeklyGrid}>
          <div className={styles.columnsContainer}>
            {weeklyData.map((data, index) => (
              <div className={styles.column}>
                <div key={data.day} className={styles.cellDay}>
                  {data.day}
                  <br />
                  <p className={styles.weeklyDate}>
                    {begginingOfCurrentWeek.days(index).format("D")}
                  </p>
                </div>
                <div key={data.day + "cell"} className={styles.cell}>
                  {data.events.map((storeEvent, index) => (
                    <div
                      key={data.day + storeEvent.format + index}
                      className={styles.weeklyFormat}
                    >
                      <div
                        style={{
                          display: filterFormats.includes(storeEvent.format)
                            ? ""
                            : "none",
                        }}
                      >
                        <div
                          className={
                            styles.formatCard +
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
                              styles.storeCard +
                              " " +
                              getFormatColourModuleClassName(
                                storeEvent.format,
                                "store"
                              )
                            }
                            onClick={() => {
                              handleDetailsClick(store);
                            }}
                          >
                            {store.storeName}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && selectedStore && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <StoreDetails
              name={selectedStore.storeName}
              website={selectedStore.website}
              address={selectedStore.address}
              phone={selectedStore.phoneNumber}
              description={selectedStore.description}
            />
          </div>
        </div>
      )}
    </div>
  );
}
