import classes from "./HeaderHero.module.css";

export default function HeaderHero({
  title="",
  secondTitle="",
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
      style={{
        display: "flex",
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url(${imageURL})`,
        minHeight: "60vh",
        backgroundPosition: "0% 43%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          minWidth: "70%",
          alignItems: "center",
        }}
      >
        <div style={{ display: "inline-flex" }}>
          <p className={classes.mtgEdmontonLogo}>
            MTG
            <br />
            EDM
          </p>
        </div>
        <div
          style={{
            display: "inline-flex",
            textAlign: "left",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              paddingLeft: "32px",
              display: "inline-block",
            }}
          >
            {isHomePage ? (
              <p className={classes.title}>
                Magic: The Gathering
                <br />
                Edmonton
              </p>
            ) : (
              <p className={classes.title}>{title}</p>
            )}

            <p
              style={{
                color: "white",
                fontFamily: "'Rubik', sans-serif",
                fontSize: "1.4rem",
                textShadow: "0 2px 4px black",
                margin: "0",
              }}
            >
              {secondTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
