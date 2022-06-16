import Image from 'next/image';
import styles from "../styles/HeroSection.module.css"
import LadyCard from "../../../assets/images/undraw_credit_card_payments.svg"
import Button from '../../../components/Button';

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.desc_section}>
        <h1 className={styles.info}>
          <span className={styles.span}>Africa’s</span> only centralized and largest <span className={styles.span}>aggregator</span> of <span className={styles.span}>health systems</span> and <span className={styles.span}>organizations</span>
        </h1>
        <p className={styles.description}>Lorem Ipsum is industry the industry&rsquo;s standard<br /> it to make a type specimen book</p>
        <div className={styles.btn_container}>
          <Button style="dark" label="Get free trial" />
          <Button style="outline" label="Learn more" />
        </div>
      </div>
      <div className={styles.svg_section}>
        <Image
          src={LadyCard}
          alt="Innovative Picture"
          width={450}
          height={450}
        />
      </div>
    </section>
  )
}

export default HeroSection;