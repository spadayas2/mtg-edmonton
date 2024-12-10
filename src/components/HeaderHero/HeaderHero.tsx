import styles from "./HeaderHero.module.css";

export default function HeaderHero({
  title = "",
  secondTitle = "",
  imageURL,
  isHomePage = false,
}: {
  title?: string;
  secondTitle?: string;
  imageURL: string;
  isHomePage: boolean;
}) {
  return (
    <div
      className={styles.heroContainer}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url(${imageURL})`,
      }}
    >
      <div className={styles.innerContainer}>
        <div className={styles.inlineFlex}>
          <p className={styles.mtgEdmontonLogo}>
            MTG
            <br />
            EDM
          </p>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.paddedText}>
            {isHomePage ? (
              <p className={styles.title}>
                Magic: The Gathering
                <br />
                Edmonton
              </p>
            ) : (
              <p className={styles.title}>{title}</p>
            )}

            <p className={styles.secondTitle}>{secondTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
