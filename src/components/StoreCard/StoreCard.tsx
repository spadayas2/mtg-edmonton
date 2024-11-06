import classes from "./StoreCard.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiCompassRoseFill } from "react-icons/pi";
import { Store } from "../Types/Types";

export default function StoreCard({
store
}: {
store:Store;
}) {
  return (
    <div
      style={{
        border: "1px solid black",
        boxShadow: "2px 1.5px black",
        width:"100%",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          padding: "1.5rem",
        }}
      >
        <div style={{display:"flex"}}>
          <div
            style={{
              fontFamily: "'Protest Strike', sans-serif",
              fontSize: "3rem",
            }}
          >
            {store.storeName}
          </div>
          
        </div>

        <div
          style={{
            fontFamily: "'Rubik', sans-serif",
            fontSize: "1.2rem",
            marginTop: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>
              <FaPhoneAlt color="#003c62" />
            </div>
            <div>{store.phoneNumber}</div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>
              <FaLocationDot color="#003c62" />
            </div>
            <div>{store.address}</div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>
              <PiCompassRoseFill color="#003c62" />
            </div>
            <div>{store.zone}</div>
          </div>
          
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          {store.websiteURL && (
            <a href={store.websiteURL} target="_blank" style={{ width: "50%" }}>
              <button className={classes.button + " " + classes.website}>
                Website
              </button>
            </a>
          )}
          {store.googleDirectionsURL && (
            <a
              href={store.googleDirectionsURL}
              target="_blank"
              style={{ width: "50%" }}
            >
              <button className={classes.button + " " + classes.directions}>
                Directions
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
