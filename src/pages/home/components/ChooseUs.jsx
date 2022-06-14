import styles from "../styles/ChooseUs.module.css"
import { BsJournalMedical } from 'react-icons/bs';
import Button from "../../../components/Button";

const ChooseUs = () => {

  const cards = [
    {
      icon: "",
      heading: "Payment Processing",
      subheading: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      icon: "",
      heading: "Payment Processing",
      subheading: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      icon: "",
      heading: "Payment Processing",
      subheading: "Lorem Ipsum is simply dummy text of the printing"
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.section_heading}>
          <h1 className={styles.heading}>Why you should choose us</h1>
          <p className={styles.subheading}>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className={styles.cards}>
          {cards.map((item, i) => 
            <div 
              className={styles.card}
              key={i}
            >
              <div className={styles.card_icon}>
                <div className={styles.icon_inner}>
                  <BsJournalMedical size={24} />
                </div>
              </div>
              <p className={styles.card_heading}>{item.heading}</p>
              <p>{item.subheading}</p>
            </div>
          )}
        </div>
        <div className={styles.button_area}>
          <Button style='box-lemon' label="Get free trial" />
        </div>
      </div>
    </section>
  )
}

export default ChooseUs;