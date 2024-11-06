import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import classes from "./TradingInfoSection.module.css";

export default function TradingInfoSection() {
  return (
    <section className={classes.sectionContainer}>
      <article className={classes.articleContainer}>
        <div className={classes.iconContainer}>
          <FaPersonCircleQuestion fontSize={"5rem"} />
        </div>
        <h1 className={classes.articleHeader}>Where</h1>
        <div className={classes.articleContent}>
          <p>A few places you can trade/sell cards</p>
          <ul>
            <li>Local Stores</li>
            <li>Facebook Groups and Marketplace</li>
            <li>Kijiji, Ebay etc.</li>
          </ul>
        </div>
      </article>

      <article className={classes.articleContainer}>
        <div className={classes.iconContainer}>
          <FaMoneyBill fontSize={"5rem"} />
        </div>
        <h1 className={classes.articleHeader}>Pricing</h1>
        <div className={classes.articleContent}>
          <p>It is recommended to research the price of your cards, you can visit websites like</p>
          <a href="https://www.facetofacegames.com/" target="_blank">
              Face to Face Games (F2F)
            </a>
            <p>Generally you will get a percentage of the card value</p>
        </div>
      </article>
    </section>
  );
}
