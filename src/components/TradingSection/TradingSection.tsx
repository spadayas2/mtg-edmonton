import mtgCardPileImg from "../images/mtg-card-pile.jpeg";

function TradingSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "3rem",
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mtgCardPileImg})`,
        backgroundSize: "cover",
      }}
    >
      <div style={{ display: "inline-flex", width: "70%", height: "25vh" }}>
        <div
          style={{
            width: "60%",
            fontFamily: "'Rubik', sans-serif",
          }}
        >
          <p
            style={{
              fontSize: "2.5rem",
              marginTop: "0",
              fontWeight: "bold",
              marginBottom: "1em",
            }}
          >
            Trading and Selling
          </p>
          <p style={{ fontSize: "1.4rem" }}>
            A few ways you can trade or sell your cards in Edmonton.
          </p>
          <button
            className="button"
            style={{
              marginTop: "1rem",
            }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TradingSection;
