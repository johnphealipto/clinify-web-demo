import styles from "../assets/styles/Button.module.css"

const Button = ({ type, label, style }) => {
  return (
    <>
      {style === "dark" &&
        <div className={styles.dark_btn_area}>
          <input 
            type={type}
            value={label}
            className={styles.dark_btn}
          />
        </div>
      }
      {style === "outline" &&
        <div className={styles.outline_btn_area}>
          <input 
            type={type}
            value={label}
            className={styles.outline_btn}
          />
        </div>
      }
      {style === "lemon" &&
        <div className={styles.lemon_btn_area}>
          <input 
            type={type}
            value={label}
            className={styles.lemon_btn}
          />
        </div>
      }
    </>
  )
}

export default Button;

Button.defaultProps = {    
  type: 'button',
  style: 'dark'
}