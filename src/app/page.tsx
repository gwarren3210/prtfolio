import styles from '@/app/page.module.css'
import Projects from '@/cmp/projects'
import Nav from '@/cmp/nav'
import Hero from '@/cmp/hero'
import Header from '@/cmp/header'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Nav /> */}
      <Header />
      <Hero />
      <Projects />
    </main>
  )
}
