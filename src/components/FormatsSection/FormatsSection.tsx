import classes from "./FormatsSection.module.css";
import { getFormatColourModuleClassName, FORMATS } from "../../utils/utility";



export default function FormatsSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(41, 41, 41)",
        paddingBottom: "2rem",
      }}
    >
      <div style={{ width: "85%" }}>
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
          FORMATS
        </div>
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.7rem",
            marginTop: "2rem",
            flexWrap:"wrap"
            
          }}
        >
          {FORMATS.map((format) => (
            <div className={classes.formatCard}>
              <div
                className={
                  classes.formatCardTitle +
                  " " +
                  getFormatColourModuleClassName(
                    format.format,
                    "title"
                  )
                }
              >
                {format.format}
              </div>
              <div className={classes.formatCardContent}>
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
