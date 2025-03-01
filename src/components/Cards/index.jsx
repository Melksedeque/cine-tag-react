import styles from "./Cards.module.css";

export default function Cards({ children }) {
  return <section className={styles.cardsContainer}>{children}</section>;
}
