import StoreCard from "../StoreCard/StoreCard";
import data from "../../data/storeData.json";
import classes from "./StoresSection.module.css";
import { useState } from "react";

const sortedStoreData = data.sort((store1, store2) => {
  if (store1.storeName > store2.storeName) return 1;
  if (store1.storeName < store2.storeName) return -1;
  return 0;
});

const zones = sortedStoreData
  .map((store) => store.zone)
  .filter((value, index, self) => self.indexOf(value) === index)
  .sort();

export default function StoresSection() {
  const [zoneFilters, setZoneFilters] = useState(["Central"]);

  function filterStyle(zone: string) {
    if (zoneFilters.includes(zone)) {
      return classes.zoneFilterButton + " " + classes.activeFilter;
    } else return classes.zoneFilterButton;
  }

  function filterZoneButton(filter: string) {
    if (zoneFilters.includes(filter)) {
      setZoneFilters(zoneFilters.filter((zone) => zone !== filter));
    } else {
      setZoneFilters((prevState) => [...prevState, filter]);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "'Protest Strike', sans-serif",
          fontSize: "3rem",
        }}
      >
        STORES
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
        {zones.map((zone) => (
          <button
            className={filterStyle(zone)}
            onClick={() => filterZoneButton(zone)}
          >
            {zone.toUpperCase()}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.5rem",
          gap: "1rem",
        }}
      >
        <button
          className={classes.zoneFilterButton}
          onClick={() => setZoneFilters([...zones])}
        >
          ALL
        </button>
        <button
          className={classes.zoneFilterButton}
          onClick={() => setZoneFilters([])}
        >
          CLEAR
        </button>
      </div>
      <div
        style={{
          display: "flex",
          padding: "0.5rem",
          flexWrap: "wrap",
          marginTop: "2rem",
          gap:"1rem"
        }}
      >
        {sortedStoreData
          .filter((store) => zoneFilters.includes(store.zone))
          .map((storeData) => (
            <div style={{ width: "calc(100%/3.1)" }}>
              <StoreCard store={storeData} />
            </div>
          ))}
      </div>
    </div>
  );
}
