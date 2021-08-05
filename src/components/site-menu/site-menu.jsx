import React from 'react';
import PropTypes from 'prop-types';
import styles from './site-menu.module.scss';

function SiteMenu({buttons}) {
  return (
    <ul className={styles.list}>
      {
        buttons.map((button) => (
          <li className={styles.item} key={button}>
            <a href="/#">{button}</a>
          </li>
        ))
      }
    </ul>
  );
}

SiteMenu.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SiteMenu;

