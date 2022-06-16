import styles from "../assets/styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h1>Clinify INC.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div>
          <h3>Important Links:</h3>
          <ul>
            <li>About</li>
            <li>Solutions</li>
            <li>Products</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;