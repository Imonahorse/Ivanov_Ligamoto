import React from 'react';
import Logo from '../logo/logo';
import SiteMenu from '../site-menu/site-menu';
import styles from './header.module.scss';
import cn from 'classnames';

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
          <Logo/>
          <SiteMenu buttons={headerButtons} className={styles.item}/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
