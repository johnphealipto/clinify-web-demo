import Link from 'next/Link'
import styles from '../assets/styles/Header.module.css'
import Button from './Button'

const Header = () => {

  const menu = ["Product", "Pricing", "About"]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3>E Wallet</h3>
        <nav>
          <ul className={styles.menu_list}>
            {menu.map((item, i) => 
              <li 
                key={i}
                className={styles.menu_item}
              >
                <Link href="/">{item}</Link>
              </li>
            )}
          </ul>
        </nav>
        <Button style='lemon' label="Sign in" />
      </div>
    </header>
  )
}

export default Header;