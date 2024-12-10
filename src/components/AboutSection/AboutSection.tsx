import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        ABOUT
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            This website is my passion project. I love MTG and noticed the hobby
            has grown in our city of Edmonton and wanted to create a hub of
            information. Hopefully this site is useful for everyone!
          </p>
          <p>
            This site has no affiliations with Wizards of the Coast and any of
            the stores that might be listed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;