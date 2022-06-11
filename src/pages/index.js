import styles from '../assets/styles/Home.module.css'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  )
}
