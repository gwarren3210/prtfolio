import cards from '@/data/cards.json'
import styles from '@/app/page.module.css'
import Card from '@/cmp/card'

export default function Projects() {
   return (
      <div className={styles.projects}>
         <h2>Here are some of my favorite projects</h2>
         <div  className={styles.grid}>
            {cards.map((card) => (
               <Card
                  title={card.title}
                  description={card.description}
                  href={card.href} 
               />
            ))}
         </div>
      </div>
   )
}