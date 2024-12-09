import styles from "./FormatsSection.module.css";
import { getFormatColourModuleClassName, FORMATS } from "../../utils/utility";

export default function FormatsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          FORMATS
        </div>
        <div className={styles.content}>
          {FORMATS.map((format) => (
            <div key={format.format + "formatCard"} className={styles.formatCard}>
              <div
                className={
                  styles.formatCardTitle +
                  " " +
                  getFormatColourModuleClassName(
                    format.format,
                    "title"
                  )
                }
              >
                {format.format}
              </div>
              <div className={styles.formatCardContent}>
                <div>Deck Size: {format.deckSize}</div>
                <div>Players: {format.players}</div>
                <div>Duration: {format.duration}</div>
                <div>Sets: {format.sets}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
