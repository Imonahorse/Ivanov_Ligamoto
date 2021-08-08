import React from 'react';
import SiteMenu from '../site-menu/site-menu';
import styles from './header.module.scss';
import cn from 'classnames';
import logo from '../../img/logo.svg';

const headerButtons = [
  'Автомобили',
  'Контакты',
  'Услуги',
  'Вакансии',
];

function Header() {
  const headerContainer = cn('container', styles.inner);

  return (
    <header className={styles.header}>
      <div className={headerContainer}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={logo} alt="Логотип"/>
          </div>
          <SiteMenu buttons={headerButtons} className={styles.item}/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
