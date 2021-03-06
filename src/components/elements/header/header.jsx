import React from 'react';
import SiteMenu from '../site-menu/site-menu';
import styles from './header.module.scss';
import cn from 'classnames';
import logo from '../../../assets/img/logo.svg';

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
          <img src={logo} className={styles.logo} alt="Логотип" width='134' height='55'/>
          <SiteMenu buttons={headerButtons} item={styles.item}/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
