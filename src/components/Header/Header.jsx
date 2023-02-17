
import {ReactComponent as Toggle} from 'assets/icons/toggle.svg'
import {ReactComponent as Cart} from 'assets/icons/cart.svg'
import {ReactComponent as Search} from 'assets/icons/search.svg'
import {ReactComponent as Moon} from 'assets/icons/moon.svg'
import {ReactComponent as Sun} from 'assets/icons/sun.svg'
import {ReactComponent as Logo} from 'assets/icons/logo.svg'

import styles from './Header.module.css'

export default function Header () {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        {/* navbar-toggle */}
        <input id={styles.navbarToggle} className={styles.navbarToggle} type="checkbox" />
        <label htmlFor={styles.navbarToggle} className={styles.burgerContainer}>
          <Toggle />
        </label>

        {/* navbar-menu */}
        <nav className={styles.navbarMenu}>
          <ul className={styles.navList} id={styles.siteMenu}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">男款</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">女款</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">最新消息</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">客製商品</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">聯絡我們</a>
            </li>
          </ul>
          <ul className={styles.navItem} site-action-list>
            {/* search */}
            <li className={styles.navItem}>
              <Search className={styles.navIcon}/></li>
            {/* cart */}
            <li className={styles.navItem}>
              <Cart className={styles.navIcon}/></li>
            {/* moon & sun */}
            <li id="themeToggle" className={styles.navItem}>
              <Moon className={styles.navIcon}/>
              {/* <Sun className={styles.navIcon}/> */}
            </li>
          </ul>
        </nav>

        {/* logo */}
        <a className={styles.headerLogoContainer} href="#">
          <Logo />
        </a>
      </div>
    </header>
  )
}