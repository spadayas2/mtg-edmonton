const sets = [
  {
    name: "Magic: The Gathering Foundations",
    image:
      "https://images.ctfassets.net/s5n2t79q9icq/2sZaGqYVE8BxfFhGAltYrx/5a7524d34e1543cc6cae721b8feb5add/BbPpBbcdRrr8839bB_1600x1080.jpg?q=70",
    date: "15.11.2024",
  },
  {
    name: "Duskmourn: House of Horror",
    image: "https://media.wizards.com/2024/images/daily/K4SdzcRHUn34.jpg",
    date: "27.09.2024",
  },
  {
    name: "Bloomburrow",
    image:
      "https://media.wizards.com/2024/images/daily/9bdb642e17.jpg",
    date: "02.08.2024",
  },
];

function CurrentSets() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Rubik', sans-serif",
          fontSize: "2rem",
          padding: "2rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div>CURRENT SETS</div>
      </div>
      <div style={{ display: "inline-flex", width: "100%" }}>
        {sets.map((set) => (
          <div
            key={set.name}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${set.image})`,
              backgroundSize: "cover",
              minHeight: "34.5vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontSize: "2rem",
              fontFamily: "'Protest Strike', sans-serif",
              color: "white",
              width: "33.33%",
            }}
          >
            {set.name}
            <br />
            <br />
            {set.date}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentSets;
