import Card from "./Card";
import styles from "./Cards.module.css";
import videos from "@/json/db.json";

export default function Cards() {
  return (
    <section className={styles.cardsContainer}>
      {videos.map((video) => {
        return <Card {...video} key={video.id} />;
      })}
    </section>
  );
}
