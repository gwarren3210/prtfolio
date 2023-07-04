import styles from '../app/page.module.css'


interface CardProps {
   href: string
   title: string
   description: string
}

export default function Card(props: CardProps) {
   return (
      <a
         href={props.href}
         className={styles.card}
         target="_blank"
         rel="noopener noreferrer"
      >
         <h3>
            {props.title} <span>-&gt;</span>
         </h3>
         <p>{props.description}</p>
      </a>
   )
   }