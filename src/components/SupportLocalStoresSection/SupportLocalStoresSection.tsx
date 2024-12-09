import styles from "./SupportLocalStoresSection.module.css";

export default function SupportLocalStoresSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>SUPPORT LOCAL</div>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            If you can, supporting local stores and individuals helps keep the
            stores running and grow the Edmonton MTG community.
          </p>
        </div>
      </div>
    </div>
  );
}
