import styles from '@/app/page.module.css'
import Projects from '@/cmp/projects'
import Nav from '@/cmp/nav'
import Hero from '@/cmp/hero'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Nav /> */}
      <Hero />
      <Projects />
    </main>
  )
}
