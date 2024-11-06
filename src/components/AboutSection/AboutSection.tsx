function AboutSection() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "3em 3em" }}
    >
      <div
        style={{
          display: "flex",
          textAlign: "center",
          width: "100%",
          justifyContent: "center",
          fontFamily: "'Protest Strike', sans-serif",
          fontSize: "3rem",
        }}
      >
        ABOUT
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "70%",
            fontFamily: "'Rubik', sans-serif",
            fontSize: "1.4rem",
          }}
        >
          <p>
            This website is my passion project. I love MTG and noticed the hobby
            has grown in our city of Edmonton and wanted to create a hub of
            information. Hopefully this site is useful for everyone!
          </p>
          <p>
            This site has no affiliations with Wizards of the Coast and any of
            the stores that might be listed.
          </p>
          <p>
            I collect my information from wiki sites, Wizards of The Coast,
            local store websites and what might be discussed from local forums.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
