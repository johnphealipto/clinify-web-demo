import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../assets/styles/Header.module.css'
import Button from './Button'
import { IoMdMenu } from 'react-icons/io';

const Header = () => {
  const router = useRouter()

  const [toggleNav, setToggleNav] = useState(false)

  const menu = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Product",
      path: "/products"
    },
    {
      name: "Solutions",
      path: "/products"
    },
    {
      name: "Contact",
      path: "/products"
    },
    {
      name: "Blog",
      path: "https://blog.myclinify.com/"
    },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3>E Wallet</h3>
        <nav className={[styles.nav, toggleNav ? styles.slide : ""].join(" ")}>
          <ul className={styles.menu_list}>
            {menu.map((item, i) => 
              <li 
                key={i}
                className={[styles.menu_item, router.pathname === item.path ? styles.active_link : ""].join(" ")}
                onClick={() => setToggleNav(!toggleNav)}
              >
                <Link href={item.path}>
                  {item.name}
                </Link>
              </li>
            )}
          </ul>
          <div
            className={styles.sm_login_btn}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <Button style='box-lemon' label="Sign in" />
          </div>
        </nav>
        <div className={styles.lg_login_btn}>
          <Button style='box-lemon' label="Sign in" />
        </div>
        <div className={styles.menu_btn}>
          <button 
            type='button'
            onClick={() => setToggleNav(!toggleNav)}
          >
            <IoMdMenu size={30} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;