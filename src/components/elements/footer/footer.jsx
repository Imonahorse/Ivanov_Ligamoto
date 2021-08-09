import React from 'react';
import SiteMenu from '../site-menu/site-menu';
import styles from './footer.module.scss';

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

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.inner}>
          <SiteMenu buttons={footerButtons} item={styles.item} list={styles.list}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
