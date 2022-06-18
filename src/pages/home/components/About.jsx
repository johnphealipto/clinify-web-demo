import Image from 'next/image';
import styles from "../styles/About.module.css"
import CurvedLine from "../../../assets/images/curved.svg"

const About = () => {
  return (
    <section className={styles.container}>
      <Image
        src={CurvedLine}
        alt="Curved"
        width={300}
      />
      <h3 className={styles.decription}>Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</h3>
    </section>
  )
}

export default About