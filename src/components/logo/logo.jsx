import React from 'react';
import logo from './../../img/logo.svg';
import styles from './logo.module.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Логотип"/>
    </div>
  );
}

export default Logo;

