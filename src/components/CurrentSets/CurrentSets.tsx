import styles from './CurrentSets.module.css';


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
      <div className={styles.header}>
        <div>CURRENT SETS</div>
      </div>
      <div className={styles.setsContainer}>
        {sets.map((set) => (
          <div
            key={set.name}
            className={styles.set}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${set.image})`,
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
