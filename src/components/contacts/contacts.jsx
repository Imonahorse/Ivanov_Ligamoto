import React from 'react';
import styles from './contacts.module.scss';
// import map from './../../img/map.png';
import cn from 'classnames';

import YandexMap from '../map/yandex-map';

function Contacts() {
  return (
    <div className={cn('container', styles.wrapper)}>
      <h3 className='visually-hidden'>Контакты</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <b className={styles.title}>Адрес</b>
          <address className={styles.info}>Санкт-Петербург, набережная&nbsp;реки&nbsp;Карповки,&nbsp;дом&nbsp;5</address>
        </li>
        <li className={styles.item}>
          <b className={styles.title}>Режим работы</b>
          <span className={styles.info}>Ежедневно, с 10:00 до 21:00</span>
        </li>
        <li className={styles.item}>
          <b className={styles.title}>Телефон</b>
          <a className={styles.info} href="tel: 8 (800) 333-55-99">8 (800) 333-55-99</a>
        </li>
        <li className={styles.item}>
          <b className={styles.title}>E-mail</b>
          <a className={styles.info} href="mailto: info@avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>
      <div className={styles.picture}>
        <YandexMap />
        {/*<img src={map} alt="Как добраться"/>*/}
      </div>
    </div>
  );
}

export default Contacts;
