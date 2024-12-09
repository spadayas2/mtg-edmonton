import styles from "./StoreCard.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Store } from "../Types/Types";

export default function StoreCard({ store, onDetailsClick }: { store: Store, onDetailsClick: (storeData: Store) => void }) {
  return (
    <div className={styles.card}>
      <div className={styles.padding}>
        <div className={styles.flex}>
          <div className={styles.storeName}>{store.storeName}</div>
        </div>

        <div className={styles.storeDetails}>
          <div className={styles.flexGap}>
            <div>
              <FaPhoneAlt color="#003c62" />
            </div>
            <div>{store.phoneNumber}</div>
          </div>
          <div className={styles.flexGap}>
            <div>
              <FaLocationDot color="#003c62" />
            </div>
            <div>{store.address}</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.flex}>
          {store.websiteURL && (
            <a
              href={store.websiteURL}
              target="_blank"
              className={styles.width50}
            >
              <button className={styles.button + " " + styles.website}>
                Website
              </button>
            </a>
          )}
                      <a
              className={styles.width50}
            >
              <button className={styles.button + " " + styles.directions}
              onClick={()=>onDetailsClick(store)}>
                Details
              </button>
            </a>
        </div>
      </div>
    </div>
  );
}
