import Link from 'next/link'
import styles from '../assets/styles/Header.module.css'
import Button from './Button'
import { IoMdMenu } from 'react-icons/io';

const Header = () => {

  const menu = ["Product", "Pricing", "About"]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3>E Wallet</h3>
        <nav className={styles.lg_nav}>
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
        <div className={styles.login_btn}>
          <Button style='box-lemon' label="Sign in" />
        </div>
        <div className={styles.menu_btn}>
          <button type='button'>
            <IoMdMenu size={30} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;