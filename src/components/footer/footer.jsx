import React from 'react';
import SiteMenu from '../site-menu/site-menu';
import styles from './footer.module.scss';
import cn from 'classnames';

const footerButtons = [
  'Корпоративным клиентам',
  'Клиентам',
  'Аренда авто',
  'Каршеринг',
  'Как продать авто',
  'Trade-in',
  'Test drive',
];

function Footer() {
  const containerClass = cn('container', styles.inner);

  return (
    <footer className={styles.footer}>
      <div className={containerClass}>
        <SiteMenu buttons={footerButtons} className={styles.item}/>
      </div>
    </footer>
  );
}

export default Footer;
