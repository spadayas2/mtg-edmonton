import classes from "./EventStoreCardModal.module.css";
import StoreCard from "../StoreCard/StoreCard";
import { Store } from "../Types/Types";

export default function EventStoreCardModal({
  open,
  onClose,
  store
}: {
  open: boolean;
  onClose: () => void;
 store: Store
}) {
  return (
    <div style={{ display: open ? "block" : "none" }}>
      <div className={classes.modal}>
        <div className={classes.modalMain}>
          <StoreCard store={store}/>
          <button className={classes.button} onClick={onClose}>Close</button>
          </div>
      </div>
    </div>
  );
}
