import styles from "./TradeSafelySection.module.css";

export default function TradeSafelySection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>TRADE SAFELY</div>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Whether you are trading or selling cards to someone indivdually or
            stores, always take the right percautions for your own safety.
          </p>
          <p>
            Research the values of your cards and meet in monitored locations,
            this will help prevent you from being scammed or possibly harmed.
          </p>
        </div>
      </div>
    </div>
  );
}
