import Image from 'next/image';
import styles from "../styles/HeroSection.module.css"
import payments from "../../../assets/images/undraw_credit_card_payments.svg"
import Button from '../../../components/Button';

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.desc_section}>
        <h1 className={styles.info}>
          <span className={styles.span}>Manage</span> your <br /> 
          <span className={styles.span}>money</span> more <br /> 
          quickly
        </h1>
        <p className={styles.description}>Lorem Ipsum is industry the industry&rsquo;s standard<br /> it to make a type specimen book</p>
        <div className={styles.btn_container}>
          <Button style="dark" label="Get free trial" />
          <Button style="outline" label="Learn more" />
        </div>
      </div>
      <div className={styles.svg_section}>
        <Image
          src={payments}
          alt="Innovative Picture"
          width={450}
          height={450}
        />
      </div>
    </section>
  )
}

export default HeroSection;