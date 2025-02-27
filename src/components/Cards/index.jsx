import Card from './Card'
import styles from './Cards.module.css'	

export default function Cards() {
    return (
        <div className={styles.cards}>
            {cards.map((card) => {
                <Card />
            })}
        </div>
    )
}