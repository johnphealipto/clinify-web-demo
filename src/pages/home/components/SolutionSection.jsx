import Image from 'next/image';
import Button from "../../../components/Button";
import styles from "../styles/SolutionSection.module.css"
import CardOption from "../../../assets/images/debit-card-options.svg"

const SolutionSection = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.card_option}>
          <Image
            src={CardOption}
            alt="Innovative Picture"
          />
        </div>
        <div>
          <h1 className={styles.heading}>Deliver a white-label digital bank in weeks</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <div className={styles.btn_area}>
            <Button style="box-black" label="Get free trial" />
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <div>
          <h1 className={styles.heading}>Lorem Ipsum is simply_dummy text dummy text</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
        <div></div>
      </section>
    </>
  )
}

export default SolutionSection;