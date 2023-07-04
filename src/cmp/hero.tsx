import styles from '@/app/page.module.css'
import Image from 'next/image'

export default function Hero() {
   const size = 300

   return (
      <div className={styles.hero}>
         <div className={styles.hero_description}>
            <h1 className={styles.hero_title}>
               Hello, I&apos;m Gavriel
            </h1>
            <p>
               Welcome to my website!
            </p>
         </div>
         <div>
            <div style={{borderRadius: '100px', overflow: 'hidden'}}>
               <Image
                  src="/pfp.jpeg"
                  //src="../public/next.svg"
                  alt="Profile Picture"
                  width={size}
                  height={size}
                  className={styles.pfp}
               />
            </div>
         </div>
      </div>
   )
}

